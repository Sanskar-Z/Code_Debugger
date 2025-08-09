export const LANGUAGE_VERSIONS = [
  "javascript",  // Piston: node 18.15.0
  "typescript",  // Piston: deno typescript runtime
  "python",      // Piston: python 3.10.0
  "java",        // Piston: openjdk 15.0.2
  "c",           // Piston: gcc 10.2.0
  "cpp",         // Piston: g++ 10.2.0
  "php",         // Piston: php 8.2.3
  "html",        // Client-side only, no Piston runtime
  "css"          // Client-side only
];

export const CODE_SNIPPETS = {
  "javascript": `
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alex");
`,

  "typescript": `
type Params = {
  name: string;
}

function greet(data: Params) {
  console.log("Hello, " + data.name + "!");
}

greet({ name: "Alex" });
`,

  "python": `
def greet(name):
  print("Hello, " + name + "!")

greet("Alex")
`,

  "java": `
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
`,

  "c": `
#include <stdio.h>

int main() {
  printf("Hello World\\n");
  return 0;
}
`,

  "cpp": `
#include <iostream>

int main() {
  std::cout << "Hello World" << std::endl;
  return 0;
}
`,

  "php": `
<?php
$name = 'Alex';
echo $name;
?>
`,

  "html": `
<!DOCTYPE html>
<html>
<head>
  <title>Hello</title>
</head>
<body>
  <h1>Hello, Alex!</h1>
</body>
</html>
`,

  "css": `
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}
`
};
