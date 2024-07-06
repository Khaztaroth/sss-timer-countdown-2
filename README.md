## Updated version of the Secret Sleepover Society timer website
-  Built in web components for lighter size and faster performace
-  Displays a silly message during loading to avoid flashing information at the user
-  Time display skips `0 time` labels. `1 day 0 hours 20 minutes` will show as `1 day 20 minutes`
-  Supports Light / Dark themes based on user device preference

###  DIfferences from V1
-  Fetches time information at launch instead of every second
-  Combined pre-written constants into a function that dynamically sets the necesary values
-  Figured out how CORS works.
