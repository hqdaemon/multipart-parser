import mp from "../src/mp.mjs";
import fs from "node:fs/promises";

const income = `------cb6762ec1a35a74a
Content-Disposition: form-data; name="jsonFile"
Content-Type: application/json

{"key": "value"}
------cb6762ec1a35a74a
Content-Disposition: form-data; name="variable"

value
------cb6762ec1a35a74a
Content-Disposition: form-data; name="image"; filename="filename.jpg"
Content-Type: image/jpeg

SExif ....
------cb6762ec1a35a74a
Content-Disposition: form-data; name="images[]"; filename="filename1.jpg"
Content-Type: image/jpeg

SExif ....
------cb6762ec1a35a74a
Content-Disposition: form-data; name="images[]"; filename="filename2.jpg"
Content-Type: image/jpeg

SExif ....
------cb6762ec1a35a74a
Content-Disposition: form-data; name="binFile"; filename="bin.dat"
Content-Type: application/octet-stream

Binary data
------cb6762ec1a35a74a
Content-Disposition: form-data; name="textFile"; filename="text.txt"
Content-Type: text/plain

Plain Text
------cb6762ec1a35a74a--
`;

let data = mp(Buffer.from(income));
console.log(data);
// await fs.writeFile("tests/income", Buffer.from(income));
// await fs.writeFile("tests/output.json", JSON.stringify(data, null, "\t"));
console.log("Test finished");