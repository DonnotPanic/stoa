import "./meta.styl";

const wordCount = (s) => {
  const cn = s.match(/[\u4E00-\u9FA5]/g);
  let cnLen = 0;
  if (cn) cnLen = cn.length;
  s = s.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi, " "); //2 or more space to 1
  s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
  const enLen = s.split(" ").filter(function (str) {
    return str !== "";
  }).length;
  return enLen + cnLen;
  //return s.split(' ').filter(String).length; - this can also be used
};

// return raw HTML element
const wordWrapper = (data) => {
  let wordNum = wordCount(data);
  let readTime = Math.ceil(wordNum / 250);
  let readInfo = readTime + " min read";
  return `\n<p><span id='read-info'> ${readInfo} </span></p>\n`;
};

export default function metaProperty(data) {
  const res = data.replace(/^\+\+\+(.*)\+\+\+/gs, "").replace(/^\s+/g, "");
  let i = res.indexOf("\n");
  return res.slice(0, i) + wordWrapper(res) + res.slice(i + 1, res.length);
}
