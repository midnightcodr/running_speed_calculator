function usage(f) {
	console.log("Usage: node %s distance [hh:[mm:]]ss", f);
}

var argv=process.argv;

if( argv.length<4 ) {
	usage(argv[1]);
	process.exit();
}

function cal_speed(dist_str, time_str) {
	var cl_num=time_str.split(':').length-1;
	if(cl_num<1) {
		time_str='00:00:'+time_str;
	} else if(cl_num<2) {
		time_str='00:'+time_str;
	}
	var dist_reg=/^(\d+(?:\.\d+)?)$/
		, time_reg= /^(?:(2[0-3]|[0-1][0-9]):)?(?:([0-5][0-9]):)?([0-5][0-9](?:\.[0-9]+)?)$/
		, dist_res=dist_reg.exec( dist_str )
		, time_res=time_reg.exec( time_str )

	if(dist_res && time_res) {
		var hours=(time_res[1]||0)*1
			, minutes=(time_res[2]||0)*1
			, seconds=(time_res[3]||0)*1
		total_seconds=hours*3600+minutes*60+seconds;
		if(total_seconds>0) {
			return 3600*dist_res[1]/total_seconds;
		} else {
			return null;
		}
	}
	return null;
}

var avg_speed=cal_speed(argv[2], argv[3]);
if(avg_speed!==null) {
	console.log("Average Speed: " + avg_speed.toFixed(3));
} else {
	console.log("Error: Invalid distance or time format, or total time is 0 seconds.");
	usage(argv[1]);
}
