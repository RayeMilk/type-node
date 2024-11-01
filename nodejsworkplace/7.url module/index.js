import {URL} from "url";

const myURL = new URL("https://example.org:8080/p/a/t/h?query=string#hash");
console.log(myURL.hash); //# hash
console.log(myURL.host); //example.org:8080
console.log(myURL.hostname); //example.org
console.log(myURL.href); //https://example.org:8080/p/a/t/h?query=string#hash
console.log(myURL.origin); //https://example.org:8080
console.log(myURL.password); //
console.log(myURL.pathname); // /p/a/t/h
console.log(myURL.port); // 8080
console.log(myURL.protocol); // https:
console.log(myURL.searchParams); // URLSearchParams { 'query' => 'string' }

// this both work the same
console.log(myURL.toString()); //https://example.org:8080/p/a/t/h?query=string#hash
console.log(myURL.toJSON()); //https://example.org:8080/p/a/t/h?query=string#hash


