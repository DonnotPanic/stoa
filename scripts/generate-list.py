from pathlib import Path
import os
from datetime import datetime, UTC
import re

##  run this scripts in root dir, so it should be "python ./scripts/generate-list.py"
##  instead of "python ./generate-list.py" in scripts directory

def getFiles(dir):
    return [x for x in dir.iterdir() if x.is_file()]

def Unix2Date(time):
    time = int(time)
    return datetime.fromtimestamp(time, UTC).strftime("%Y-%m-%d")

def readInfo(path):
    file = open(path,mode='r',encoding='utf-8').read()
    fileInfo = re.match(r'\+\+\+(.*)\+\+\+',file,re.M|re.S)
    if fileInfo is None : return ""
    else: return fileInfo.group(1)

def parseDate(info):
    str = re.search(r'date(\s*)[=:](\s*)(.*)',info,re.M).group(3)
    return str.replace('\"',"")

def main():
    # read from 'mdList', store it in hashmap
    res = []
    p = Path("./public/markdowns")
    mdList = p / 'mdList.csv'
    file = open(mdList, mode='w',encoding='utf-8')
    # check recursively to count all md files in markdowns dir
    for iter in getFiles(p):
        if iter.suffix == ".md":
            f = iter.name[:-3]
            readInfo(iter)
            t = Unix2Date(os.path.getctime(str(p)))
            res.append({"name": f, "time": t, "dir": "/"})

    wl = [x for x in p.iterdir() if x.is_dir()]
    while(wl != []):
        cur = wl.pop(0)
        relative = "/" + str(cur.relative_to(p))
        if (relative == '/intros'): continue
        for iter in getFiles(cur):
            if iter.suffix == ".md":
                f = iter.name[:-3]
                t = Unix2Date(os.path.getctime(str(p)))
                info = readInfo(iter)
                if (info != ""): t = parseDate(info)
                res.append({"name": f, "time": t, "dir": relative})
        wl += [x for x in cur.iterdir() if x.is_dir()]
    # overwrite res into file sorted by time descending
    res = sorted(res, key=lambda x: datetime.strptime(x["time"], "%Y-%m-%d"),reverse=True)
    content = '\n'.join([(f"{x["name"]},{x["time"]},{x["dir"]}") for x in res])
    file.seek(0)
    file.write(content)
    file.truncate()
    file.close()

if __name__ == "__main__":
    main()