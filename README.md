## why bother
I have a Garmin Forerunner 410 GPS watch and I love it. But I found one thing quite annoying: I can't figure out the speed (mph) from the history log without using a calculator. Basically I can see something lik 3.09mi in 24:57.52 (today's running record, also there's a pacer record 08:04/mi but still it's not straight-forward to get the average speed). After throwing some pretty cool regex I got a simple calculator done. Enjoy the code (and running if you like to run too).

## usage examples
	node c.js 2.19 17:14.43
	node c.js 3 24:15	// will be interpreted as 24 minutes and 15 seconds

## update [4/11/2012]
	modified the time stamp regular expression, credit goes to http://stackoverflow.com/questions/1400297/matching-hours-minutes-seconds-in-regular-expressions-a-better-way
