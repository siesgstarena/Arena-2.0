const languageDefaults = {
  Java: 'public class Main { \n\tpublic static void main(String[] args){ \n\t\tSystem.out.println("hello, world");\n\n\t}\n}',
  'C++':
    '#include <bits/stdc++.h>\nusing namespace std;\n\nint main() { \n\t// your code goes here\n\treturn 0;\n}',
  C: '#include <stdio.h>\nint main(void) { \n\t// your code goes here\n\treturn 0;\n}',
  Go: 'package main\nimport "fmt"\n\nfunc main(){\n// your code goes here\n}',
  Javascript:
    'process.stdin.resume();\nprocess.stdin.setEncoding("utf-8");\nvar stdin_input = "";\nprocess.stdin.on("data", function (input) {\n\tstdin_input += input;\n});\nprocess.stdin.on("end", function () {\n\tmain(stdin_input);\n});\nfunction main(input) {\n\tprocess.stdout.write(input);\n}',
  Python2: '# your code goes here',
  Python: '# your code goes here',
  Python3: '# your code goes here',
  None: '',
};

export default languageDefaults;
