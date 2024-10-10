'use client';

import React, { useEffect, useMemo, useState } from 'react';
import AccordionCard from '@/components/AccordionCard';
import AccordionItem from '@/components/AccordionItem';
import { TaskItem } from '@/components/TaskItem';
import { MODULE_IMAGES, MODULES } from '@/constants/modules';
import { ApiResponse } from '@/types/api';
import { Box, Drawer, Button, Skeleton } from '@mui/material';
import { Task, Modules } from '@/types/modules';
import { getLessons } from '@/services/api/lessons';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import { SideBarProps } from '@/types/sidebar';

const SideBar = ({ isLoadingUnity }: SideBarProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [lessons, setLessons] = useState<ApiResponse<Task>>();

  const modules = useMemo(() => {
    if (!lessons) return [];

    const filteredLessons = lessons?.content?.filter(
      (lesson) =>
        !lesson.title.toLowerCase().includes('required practical activity') // Not sure what to do with this ones
    );

    const groupedModules = filteredLessons?.reduce((modules, task) => {
      const splittedTitle = task.title.split(' - ');
      const [moduleNumber, lessonNumber] = splittedTitle[0]
        .split('.')
        .slice(0, 2);

      const moduleTitle = MODULES[+moduleNumber - 1];
      const moduleImage = MODULE_IMAGES[+moduleNumber - 1];

      const lessonTitle = splittedTitle[1];
      const lessonModule = `${moduleNumber}.${lessonNumber}`;

      let moduleGroup = modules.find(
        (module) => module.number === moduleNumber
      );

      if (!moduleGroup) {
        moduleGroup = {
          image: moduleImage,
          title: moduleTitle,
          number: moduleNumber,
          taskCount: 0,
          lessons: [],
        };
        modules.push(moduleGroup);
      }

      let moduleLessons = moduleGroup.lessons.find(
        (lessons) => lessons.lessonModule === lessonModule
      );

      if (!moduleLessons) {
        moduleLessons = {
          lessonModule,
          lessonTitle,
          tasks: [],
        };
        moduleGroup.lessons.push(moduleLessons);
      }

      moduleLessons.tasks.push(task);

      return modules;
    }, [] as Modules[]);

    return groupedModules
      .sort((moduleA, moduleB) => moduleA.number.localeCompare(moduleB.number))
      .map((module) => {
        const completed = module.lessons.every((lesson) =>
          lesson.tasks.every((task) => task.isLocked)
        );

        const taskCount = module.lessons.reduce(
          (count, lesson) => count + lesson.tasks.length,
          0
        );

        return {
          ...module,
          taskCount,
          completed,
          lessons: module.lessons
            .sort((lessonA, lessonB) =>
              lessonA.lessonModule.localeCompare(lessonB.lessonModule)
            )
            .map((lesson) => {
              return {
                ...lesson,
                taskCount: lesson.tasks.length,
                tasks: lesson.tasks.sort((taskA, taskB) =>
                  taskA.title.localeCompare(taskB.title)
                ),
              };
            }),
        };
      });
  }, [lessons]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await getLessons();
        setLessons(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLessons();
  }, []);

  if (isLoading) {
    return (
      <Box className='bg-highlight shadow-xl p-4 rounded-2xl h-full hidden sm:block'>
        <Box className='rounded-2xl flex gap-4 flex-col bg-highlight h-full'>
          {Array.from({ length: 8 }).map((_, index) => (
            <Box key={index}>
              <Skeleton variant='rounded' className='rounded-2xl' height={75} />
            </Box>
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <>
      {!isLoadingUnity && (
        <Box className='sm:hidden'>
          <Button
            variant='text'
            className='absolute top-[5.5rem] right-4 text-grey0 normal-case rounded-full'
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            Course Menu
            <ImportContactsTwoToneIcon className='ml-2' />
          </Button>
        </Box>
      )}
      {openDrawer && (
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(!openDrawer)}>
          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                <div className='pointer-events-auto relative w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white  shadow-xl'>
                    <div className='p-4'>
                      <Button
                        variant='text'
                        className='text-grey0 normal-case align-start flex '
                        onClick={() => setOpenDrawer(!openDrawer)}
                      >
                        <KeyboardArrowLeftTwoToneIcon />
                        Back to Course
                      </Button>
                    </div>
                    <div className='relative flex-1 px-4 sm:px-6'>
                      {modules?.map((module, index) => (
                        <AccordionCard
                          key={index}
                          title={module.title}
                          number={module.number}
                          count={module.taskCount}
                          completed={module.completed}
                          image={module.image}
                        >
                          {module.lessons.map((lesson, index) => (
                            <AccordionItem
                              key={index}
                              module={lesson.lessonModule}
                              title={lesson.lessonTitle}
                              expandedClassName='bg-highlight text-primary'
                            >
                              {lesson.tasks.map((task, index) => (
                                <TaskItem key={index} task={task} />
                              ))}
                            </AccordionItem>
                          ))}
                        </AccordionCard>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      )}
      <Box className='bg-highlight shadow-xl p-4 rounded-2xl h-full hidden sm:block '>
        <Box className='rounded-2xl flex gap-4 flex-col bg-highlight h-full'>
          {modules?.map((module, index) => (
            <AccordionCard
              key={index}
              title={module.title}
              number={module.number}
              count={module.taskCount}
              completed={module.completed}
              image={module.image}
            >
              {module.lessons.map((lesson, index) => (
                <AccordionItem
                  key={index}
                  module={lesson.lessonModule}
                  title={lesson.lessonTitle}
                  expandedClassName='bg-highlight text-primary'
                >
                  {lesson.tasks.map((task, index) => (
                    <TaskItem key={index} task={task} />
                  ))}
                </AccordionItem>
              ))}
            </AccordionCard>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default SideBar;
