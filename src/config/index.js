export const dummyVideoData = [
  {
    id: 1,
    title: "はるの おとずれと フキノトウ",
    content:
      "はるの おとずれを かんじさせる しょくぶつ、フキノトウと タケノコを しょうかいします。",
    useStamp: true,
    useQuestion: false,
  },
  {
    id: 2,
    title: "たんぽぽの ひみつ",
    content:
      "たんぽぽが 花を さかせてから たねになるまでの ようすを しょうかいします。",
    useStamp: true,
    useQuestion: true,
  },
  {
    id: 3,
    title: "どうぶつ園の じゅういの しごと",
    content:
      "どうぶつ園の じゅういさんは、 まいにち どうぶつと むきあって、 どのようなしごとをしているのでしょうか。 {甲*こう*}{府*ふ*}{市*し*}の {遊*ゆう*}{亀*き*}{公*こう*}{園*えん*}{付*ふ*}{属*ぞく*}どうぶつ園の {秋*あき*}{山*やま*}さんの しごとを しょうかいします。",
    useStamp: false,
    useQuestion: false,
  },
  {
    id: 4,
    title: "はるの おとずれと フキノトウ",
    content:
      "はるの おとずれを かんじさせる しょくぶつ、フキノトウと タケノコを しょうかいします。",
    useStamp: false,
    useQuestion: false,
  },
  {
    id: 5,
    title: "はるの おとずれと フキノトウ",
    content:
      "はるの おとずれを かんじさせる しょくぶつ、フキノトウと タケノコを しょうかいします。",
    useStamp: false,
    useQuestion: false,
  },
];
export const dummyWordData = [
  "ちえ",
  "しぼむ",
  "やがて",
  "ちえ",
  "しぼむ",
  "やがて",
  "ちえ",
  "しぼむ",
  "やがて",
  "ちえ",
  "しぼむ",
  "やがて",
  "ちえ",
  "しぼむ",
  "やがて",
  "ちえ",
  "しぼむ",
  "やがて",
];
export const dummyClassData = [
  "1年 1組",
  "1年 2組",
  "2年 1組",
  "2年 2組",
  "3年 1組",
  "3年 2組",
  "4年 1組",
  "4年 2組",
  "5年 1組",
  "5年 2組",
  "6年 1s組",
  "6年 2組",
];
export const isNumber = (value) => {
  return typeof value === "number" && !isNaN(value);
};
export const isKanji = (char) => {
  const code = char.charCodeAt(0);
  return code >= 0x4c00 && code <= 0x9faf;
};
