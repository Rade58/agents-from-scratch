import 'dotenv/config';
import { partOne } from './src/1_part___one';
import { partTwo } from './src/2_part___agent';

// -------------------------------------------------

// - One of   (no memory)

// - Chat based (memory (we used db))

// - Chat based with system message

// partOne();
// -------------------------------------------------
// -------------------------------------------------
//
// - Part 2
// - in this case we are dealing with tool call

// - based on the prompt ai decides to call the tool or not
// - if it does, it will return the tool call id and arguments
// - ai will tell us that we need to call the function associated with the tool call

// we didn't save the massages in the history (actually we did since
// this error is helpful for learning)
// since
// in case of response of tool call
// If I would save it in db, it would produce error
// since the message is not valid

// valid message that we would save would be after calling the function
// and that would be valid message
// message would be of role "tool"
// and content would be the result of the function
// and id needs to be the same as the tool call id

// - content is null in case of tool call
// and we have another thing called refusal
// - refusal in the response of tool call
// we can use it to check if the tool call was successful
// or not

partTwo();
