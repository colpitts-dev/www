import { faker } from "@faker-js/faker";
import { CourseStatusType } from "@prisma/client";

export const people = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: "Password123!",
    isAdmin: true,
  },
  {
    name: "Sally",
    email: "sally@example.com",
    password: "Password123!",
    isAdmin: false,
    profile: {
      create: {
        nickname: "SalSal",
        bio: "I am a Graphic Designer",
      },
    },
  },
  {
    name: "Bob",
    email: "bob@example.com",
    password: "Password123!",
    isAdmin: false,
    profile: {
      create: {
        nickname: "BoBBY",
        bio: "Builder of things",
      },
    },
  },
];

export const courses = [
  {
    title: "Alpha Course",
    description: "This is a public (free) course",
    slug: "alpha-course",
    status: CourseStatusType.PUBLIC,
    modules: {
      create: [
        {
          title: "Alpha Module 1",
          description: "This is the description of Module 1",
          lessons: {
            create: [
              {
                title: "Alpha Module 1 - Lesson 1",
                description: "This is the content of Lesson 1",
                topics: {
                  create: [
                    {
                      title: "Alpha Topic 1.1",
                      description: "This is the description of Topic 1",
                    },
                    {
                      title: "Alpha Topic 1.2",
                      description: "This is the description of Topic 2",
                    },
                  ],
                },
              },
              {
                title: "Alpha Module 1 - Lesson 2",
                description: "This is the description of Lesson 2",
                topics: {
                  create: [
                    {
                      title: "Alpha Topic 2.1",
                      description: "This is the description of Topic 1",
                    },
                    {
                      title: "Alpha Topic 2.2",
                      description: "This is the description of Topic 2",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          title: "Alpha Module 2",
          description: "This is the description of Module 2",
          lessons: {
            create: [
              {
                title: "Alpha Module 2 - Lesson 1",
                description: "This is the description of Lesson 1",
              },
              {
                title: "Alpha Module 2 - Lesson 2",
                description: "This is the description of Lesson 2",
              },
            ],
          },
        },
      ],
    },
  },
  {
    title: "Bravo Course",
    description: "This course requires a membership",
    slug: "bravo-course",
    status: CourseStatusType.PRIVATE,
  },
  {
    title: "Charlie Course",
    description: "This course requires a membership",
    slug: "charlie-course",
    status: CourseStatusType.PRIVATE,
    modules: {
      create: [
        {
          title: "Charlie Module 1",
          description: "This is the description of Module 1",
          lessons: {
            create: [
              {
                title: "Charlie Module 1 - Lesson 1",
                description: "This is the content of Lesson 1",
                topics: {
                  create: [
                    {
                      title: "Topic 1.1",
                      description: "This is the description of Topic 1",
                    },
                    {
                      title: "Topic 1.2",
                      description: "This is the description of Topic 2",
                    },
                  ],
                },
              },
              {
                title: "Charlie Module 1 - Lesson 2",
                description: "This is the description of Lesson 2",
                status: "PUBLIC",
                topics: {
                  create: [
                    {
                      title: "Topic 2.1",
                      description: "This is the description of Topic 1",
                    },
                    {
                      title: "Topic 2.2",
                      description: "This is the description of Topic 2",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          title: "Charlie Module 2",
          description: "This is the description of Module 2",
          lessons: {
            create: [
              {
                title: "Charlie Module 2 - Lesson 1",
                description: "This is the description of Lesson 1",
              },
              {
                title: "Charlie Module 2 - Lesson 2",
                description: "This is the description of Lesson 2",
              },
            ],
          },
        },
      ],
    },
  },
  {
    title: "Delta Course",
    description: "This course requires a membership",
    slug: "delta-course",
    status: CourseStatusType.PRIVATE,
  },
];

export const memberships = [
  {
    owner: {
      connect: {
        email: "sally@example.com",
      },
    },
    courses: {
      connect: {
        slug: "alpha-course",
      },
    },
    learnerProfile: {
      connect: {
        nickname: "SalSal",
      },
    },
  },
  {
    owner: {
      connect: {
        email: "bob@example.com",
      },
    },
    courses: {
      connect: [
        {
          slug: "bravo-course",
        },
        {
          slug: "charlie-course",
        },
      ],
    },
    learnerProfile: {
      connect: {
        nickname: "BoBBY",
      },
    },
  },
];
