export {
  collectRoomNumbers,
  collectRoomsAndCapacities,
  collectLabeledRoomCaps,
  findClassroomsWithCapacity,
  findStudentsOlderThan,
  averageStudentAge,
  countStudentsInClassroom,
}; //implement these

type Classroom = {
  //YOUR CODE HERE
  roomNumber: number;
  capacity: number;
  students: Student[];
};

type Student = {
  //YOUR CODE HERE
  name: string;
  age: number;
};

export const classrooms: Classroom[] = [
  {
    roomNumber: 101,
    capacity: 30,
    students: [
      { name: "Alice", age: 18 },
      { name: "Bob", age: 19 },
      { name: "Charlie", age: 17 },
    ],
  },
  {
    roomNumber: 102,
    capacity: 25,

    students: [
      { name: "David", age: 20 },
      { name: "Eve", age: 18 },
    ],
  },
  {
    roomNumber: 103,
    capacity: 35,
    students: [
      { name: "Frank", age: 19 },
      { name: "Grace", age: 20 },
      { name: "Helen", age: 17 },
    ],
  },
];
/* 
  1.	Write a function collectRoomNumbers that will return an array of all the room nmbers.
  2.	Write a function collectRoomsAndCapacities to return an array with room numbers and capacities in this 
  string format:  [“101::30”, :102::25”, “103::35”].
  3.	Write a function collectLabeledRoomCaps to return room numbers and capacities in this object 
  format [{roomNumber: 101, capacity: 30} , …  ]
  4.	Create a function countStudentsInClassroom(classrooms, roomNumber) that takes the classrooms array and a 
  roomNumber as parameters and returns the number of students in the specified classroom.
  5.	Create a function findClassroomsWithCapacity(classrooms, minCapacity) that takes the classrooms array and a
   minimum capacity as parameters and returns an array of classroom objects that meet or exceed the specified capacity.
  6.	Create a function findStudentsOlderThan(classrooms, minAge) that takes the classrooms array and a minimum 
  age as parameters and returns an array of student objects who are older than the specified age, along with the name of their classroom.
  7.	Create a function averageStudentAge(classrooms) that takes the classrooms array as a parameter and returns 
  the average age of students across all classrooms.
   */

function collectRoomNumbers(): number[] {
  return classrooms.map(({ roomNumber }) => {
    return roomNumber;
  });
}

function collectRoomsAndCapacities(): string[] {
  return classrooms.map(({ roomNumber, capacity }) => {
    return `${roomNumber}::${capacity}`;
  });
}

function collectLabeledRoomCaps(): { roomNumber: number; capacity: number }[] {
  return classrooms.map(({ roomNumber, capacity }) => {
    return { roomNumber: roomNumber, capacity: capacity };
  });
}

function countStudentsInClassroom(rooms: Classroom[], roomNum: number): number {
  return rooms.reduce((sum, { roomNumber, students }) => {
    if (roomNumber == roomNum) {
      return (sum += students.length);
    } else {
      return (sum += 0);
    }
  }, 0);
}

function findClassroomsWithCapacity(
  rooms: Classroom[],
  minCapacity: number
): Classroom[] {
  return rooms.filter(({ capacity }) => {
    if (capacity >= minCapacity) {
      return true;
    }

    return false;
  });
}

function findStudentsOlderThan(rooms: Classroom[], minAge: number): Student[] {
  let result: Student[] = [];

  for (const room of rooms) {
    const res = room.students.filter(({ age }) => {
      if (age > minAge) {
        return true;
      }
      return false;
    });

    result = result.concat(res);
  }

  return result;
}

function averageStudentAge(rooms: Classroom[]): number {
  let totalSum = 0;
  let count = 0;
  for (const room of rooms) {
    totalSum += room.students.reduce((sum, { age }) => {
      count += 1;
      return (sum += age);
    }, 0);
  }

  return totalSum / count;
}
