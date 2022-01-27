const { chromium } = require("playwright");

const sex = {
  man: 5,
  female: 8,
  non: 11,
};

const user_type = {
  teacher: 21,
  student: 24,
  non: 27,
};

const year = {
  _9to14: 37,
  _15to18: 40,
  _19to25: 43,
  _26to38: 46,
};

const list1 = [9, 12, 15];

const list2 = [31, 28, 34];

const list3 = [47, 50, 53];

const list4 = [66, 69, 72];

const list5 = [85, 88, 91];

const list6 = [104, 107, 110];

const list7 = [123, 126, 129];

const test01 = async ({ sex, user_type, year }) => {
  
  const number_random = Math.floor(Math.random() * 3);

  const browser = await chromium.launch();
  const page = await browser.newPage();
  const navigationPromise = page.waitForNavigation();

  await page.goto(
    "https://docs.google.com/forms/d/e/1FAIpQLScbkn52sbMecLKCOekaltur90wpz2Cj9JD-KtFX8DIbueM23A/viewform"
  );

  await page.setViewportSize({ width: 1920, height: 961 });

  await page.waitForSelector(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      sex +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );
  await page.click(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      sex +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );

  await page.waitForSelector(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      user_type +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );
  await page.click(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      user_type +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );

  await page.waitForSelector(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      year +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );
  await page.click(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      year +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );

  await page.waitForSelector(
    ".freebirdFormviewerViewNavigationButtonsAndProgress > .freebirdFormviewerViewNavigationLeftButtons > .appsMaterialWizButtonEl > .appsMaterialWizButtonPaperbuttonContent > .appsMaterialWizButtonPaperbuttonLabel"
  );
  await page.click(
    ".freebirdFormviewerViewNavigationButtonsAndProgress > .freebirdFormviewerViewNavigationLeftButtons > .appsMaterialWizButtonEl > .appsMaterialWizButtonPaperbuttonContent > .appsMaterialWizButtonPaperbuttonLabel"
  );

  await navigationPromise;

  await page.waitForSelector(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list1[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );
  await page.click(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list1[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );

  await page.waitForSelector(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list2[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );
  await page.click(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list2[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );

  await page.waitForSelector(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list3[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );
  await page.click(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list3[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );

  await page.waitForSelector(
    ".freebirdFormviewerViewNumberedItemContainer:nth-child(7) > .m2 > .freebirdFormviewerComponentsQuestionBaseRoot > .freebirdFormviewerComponentsQuestionRadioRoot > div > .appsMaterialWizToggleRadiogroupGroupContainer > .appsMaterialWizToggleRadiogroupGroupContent > .freebirdFormviewerComponentsQuestionRadioChoicesContainer > .freebirdFormviewerComponentsQuestionRadioChoice:nth-child(2)"
  );
  await page.click(
    ".freebirdFormviewerViewNumberedItemContainer:nth-child(7) > .m2 > .freebirdFormviewerComponentsQuestionBaseRoot > .freebirdFormviewerComponentsQuestionRadioRoot > div > .appsMaterialWizToggleRadiogroupGroupContainer > .appsMaterialWizToggleRadiogroupGroupContent > .freebirdFormviewerComponentsQuestionRadioChoicesContainer > .freebirdFormviewerComponentsQuestionRadioChoice:nth-child(2)"
  );

  await page.waitForSelector(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list4[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );
  await page.click(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list4[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );

  await page.waitForSelector(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list5[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );
  await page.click(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list5[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );

  await page.waitForSelector(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list6[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );
  await page.click(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list6[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );

  await page.waitForSelector(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list7[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );
  await page.click(
    ".docssharedWizToggleLabeledLabelWrapper > .appsMaterialWizToggleRadiogroupElContainer > #i" +
      list7[number_random] +
      " > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
  );

  await page.waitForSelector(
    ".freebirdFormviewerViewNavigationButtonsAndProgress > .freebirdFormviewerViewNavigationLeftButtons > .appsMaterialWizButtonEl:nth-child(2) > .appsMaterialWizButtonPaperbuttonContent > .appsMaterialWizButtonPaperbuttonLabel"
  );
  await page.click(
    ".freebirdFormviewerViewNavigationButtonsAndProgress > .freebirdFormviewerViewNavigationLeftButtons > .appsMaterialWizButtonEl:nth-child(2) > .appsMaterialWizButtonPaperbuttonContent > .appsMaterialWizButtonPaperbuttonLabel"
  );

  await navigationPromise;
  console.log(`[🔥] Success`);
  return await browser.close();
  
};

const main = async (index) => {
  await test01({ sex: sex.female, user_type: user_type.student, year: year._15to18 });
  await test01({ sex: sex.female, user_type: user_type.student, year: year._15to18 });
  await test01({ sex: sex.man, user_type: user_type.student, year: year._15to18 });
  await test01({ sex: sex.man, user_type: user_type.student, year: year._15to18 });
  await test01({ sex: sex.man, user_type: user_type.student, year: year._15to18 });
  // await test01({ sex: sex.female, user_type: user_type.teacher, year: year._26to38 });
  // await test01({ sex: sex.man, user_type: user_type.teacher, year: year._26to38 });
  // await test01({ sex: sex.non, user_type: user_type.non, year: year._26to38 });
  // await test01({ sex: sex.non, user_type: user_type.non, year: year._26to38 });
  // console.log("----------------------SET "+(index+1)+"----------------------");
}

//ประชาชนทั่วไป
// test01();

//นักเรียนชาย 6/10
// test02()

for (let index = 0; index < 20; index++) {
  main(index)
}
