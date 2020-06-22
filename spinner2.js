//const sentence = "\r|  \r/  \r-  \r\\  \r| \n";
const sentence = ["\r|", "\r/", "\r-",  "\r\\" , "\r|","\n" ];

let i = 0;
for (const char of sentence){
  setTimeout(() => {
    process.stdout.write(char+" ");} , (1000 + i));
i += 200;
};
