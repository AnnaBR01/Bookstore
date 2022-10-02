const getRewiewMessage = (value: number) => {
  switch (value) {
    case 1:
      return "Thank you for your opinion. We will improve! 💪";

    case 2:
      return "Thank you for your opinion! 😊";

    case 3:
      return "Thank you for your opinion. We work for you! ❤";

    default:
      return "Please rate it!";
  }
};

export { getRewiewMessage };
