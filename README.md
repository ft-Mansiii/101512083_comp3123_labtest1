## Question 1 – Converting Array Strings to Lowercase
To solve this, I built a function called lowerCaseWords(mixedArray).  
- First, I made sure the argument passed in was actually an array.  
- I returned the logic wrapped inside a Promise.  
- Inside, I applied filter() to grab only the string elements from the array.  
- Then I used map() to turn those strings into lowercase.  
- If everything worked, the Promise resolved with the new array, otherwise it rejected if the input was not valid.  

---

## Question 2 – Promise with Delay
For this task, I wrote two functions.  
- One was resolvedPromise(), which waits for 500ms using setTimeout() and then resolves with { message: "delayed success" }.  
- The other was rejectedPromise(), which does the same delay but instead rejects with { message: "delayed exception" }.  
- I tested them by calling each one separately.  
- To handle the outcomes, I used .then() to log the successful message and .catch() to handle the rejection message.  

---

## Question 3 – File System Add and Remove
This question was split into two scripts (add.js and remove.js).  

*add.js*  
- I first checked if there was a folder named Logs. If it didn’t exist, I created it using fs.mkdirSync().  
- Then, I switched into that folder with process.chdir().  
- I created 10 text files (log1.txt through log10.txt) inside the folder using fs.writeFileSync(), adding some placeholder text in each file.  
- Each time a file was created, I also logged its name to the console.  

*remove.js*  
- I verified that the Logs directory was there.  
- If it was, I listed all the files inside using fs.readdirSync().  
- Then I looped through and deleted each one with fs.unlinkSync(), printing the file name as I removed it.  
- Finally, after clearing all the files, I removed the Logs folder itself using fs.rmdirSync().  

