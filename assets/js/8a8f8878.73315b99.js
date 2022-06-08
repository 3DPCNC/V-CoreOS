"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[369],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,u=c["".concat(l,".").concat(m)]||c[m]||h[m]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4845:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={sidebar_label:"Spider v1.1"},l="Fysetc Spider v1.1",d={unversionedId:"boards/fysetc/spider-11",id:"boards/fysetc/spider-11",title:"Fysetc Spider v1.1",description:"Wiring",source:"@site/docs/boards/fysetc/spider-11.md",sourceDirName:"boards/fysetc",slug:"/boards/fysetc/spider-11",permalink:"/docs/boards/fysetc/spider-11",editUrl:"https://github.com/Rat-OS/RatOS/edit/master/site/docs/boards/fysetc/spider-11.md",tags:[],version:"current",frontMatter:{sidebar_label:"Spider v1.1"},sidebar:"docsSidebar",previous:{title:"SKR Pro v1.2",permalink:"/docs/boards/btt/skr-pro-12"},next:{title:"Rat Rig V-Core 3",permalink:"/docs/printers/v-core-3"}},p=[{value:"Wiring",id:"wiring",children:[{value:"Connection to your Pi",id:"connection-to-your-pi",children:[],level:3}],level:2},{value:"Firmware installation",id:"firmware-installation",children:[{value:"Flash via SD Card (recommended)",id:"flash-via-sd-card-recommended",children:[],level:3},{value:"First time flashing via SSH(PuTTY)/USB",id:"first-time-flashing-via-sshputtyusb",children:[],level:3},{value:"Klipper Updates",id:"klipper-updates",children:[],level:3}],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"ADXL345 Connection",id:"adxl345-connection",children:[{value:"Undervoltage errors",id:"undervoltage-errors",children:[],level:3}],level:2}],h={toc:p};function c(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fysetc-spider-v11"},"Fysetc Spider v1.1"),(0,r.kt)("h2",{id:"wiring"},"Wiring"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fysetc Spider V1.1 Wiring Diagram",src:n(69).Z,width:"1409",height:"1391"})),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"If you use the Ratrig endstop switches and cables, do ",(0,r.kt)("strong",{parentName:"h5"},"not")," blindly plug them in to your Spider as doing this will short the board's 3.3V power rail.")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will probably have to swap the outer two wires (red and white) on the board end of the cable but double check to make sure."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have been testing your Spider without the stepper drivers plugged in, there is a chance that you'll blow the 3.3V voltage regulator on the board if you do not discharge the capacitors before connecting the drivers. The lesson here is don't power up the Spider without the stepper drivers plugged in. Please read ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FYSETC/FYSETC-SPIDER/blob/main/Spider%203.3v%20issue.md"},"https://github.com/FYSETC/FYSETC-SPIDER/blob/main/Spider%203.3v%20issue.md")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Before connecting a probe ",(0,r.kt)("strong",{parentName:"p"},"check")," the probe voltage selector jumper."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fysetc Spider V1.1 Probe Voltage Selector",src:n(234).Z,width:"872",height:"392"})),(0,r.kt)("h3",{id:"connection-to-your-pi"},"Connection to your Pi"),(0,r.kt)("p",null,"While the Spider can connect to your Pi via it's UART this is not\nsupported by V-Core OS as standard and will require manual firmware\nconfiguration."),(0,r.kt)("p",null,"The normal V-Core OS connection is via USB as this allows new versions\nof Klipper to be uploaded without needing an SDCard. You can, of\ncourse, power the Pi from your Spider whichever form of connection you\nuse or if you use a dedicated Pi Power Supply you can shut down your\nSpider while leaving the Pi running."),(0,r.kt)("h2",{id:"firmware-installation"},"Firmware installation"),(0,r.kt)("p",null,"For the first time install of Klipper onto the Spider; there are two\nmethods. With an SD Card or via SSH(PuTTY)/USB."),(0,r.kt)("p",null,"The SD Card method is suggested as being the\neasiest."),(0,r.kt)("h3",{id:"flash-via-sd-card-recommended"},"Flash via SD Card (recommended)"),(0,r.kt)("p",null,"Download the ",(0,r.kt)("inlineCode",{parentName:"p"},"firmware-fysetc-spider.bin")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder found on the Machine page of ",(0,r.kt)("a",{parentName:"p",href:"http://RatOS.local/"},"Mainsail"),", copy it onto the SD card that goes into your control board and call it ",(0,r.kt)("inlineCode",{parentName:"p"},"firmware.bin"),", then insert the SD card in to the control board. Here are the steps in chronological order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("a",{parentName:"li",href:"http://RatOS.local/"},"http://RatOS.local/")),(0,r.kt)("li",{parentName:"ol"},"Open Machine page"),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"firmware_binaries")," folder"),(0,r.kt)("li",{parentName:"ol"},"Download ",(0,r.kt)("inlineCode",{parentName:"li"},"firmware-fysetc-spider.bin")),(0,r.kt)("li",{parentName:"ol"},"Format the sd card for your board to FAT16 (sometimes just called FAT), or FAT32 with a clustersize of 8kb or 4kb."),(0,r.kt)("li",{parentName:"ol"},"Copy ",(0,r.kt)("inlineCode",{parentName:"li"},"firmware-fysetc-spider.bin")," onto the sd card for your board"),(0,r.kt)("li",{parentName:"ol"},"Rename ",(0,r.kt)("inlineCode",{parentName:"li"},"firmware-fysetc-spider.bin")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"firmware.bin"),". Please be wary of file extensions! If the file doesn't already show .bin, don't add it!"),(0,r.kt)("li",{parentName:"ol"},"Safely eject the SD card through your operating system."),(0,r.kt)("li",{parentName:"ol"},"Physically take out the sd card and insert it into your control board."),(0,r.kt)("li",{parentName:"ol"},"Power cycle your printer or control board. Remember to shut the pi down properly before you cut power to your Pi (you can do that through Mainsail using the dropdown menu in the top right corner). The upload should take a few seconds and a LED by the SDCard slot should flash while this is happening."),(0,r.kt)("li",{parentName:"ol"},"Verify that the firmware has been flashed and ",(0,r.kt)("strong",{parentName:"li"},"Do not put the sd card back in the board after successful flashing"),".")),(0,r.kt)("p",null,"For more information; this is documented on the Fysetc pages:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FYSETC/FYSETC-SPIDER#42-Klipper"},"https://github.com/FYSETC/FYSETC-SPIDER#42-Klipper")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you don't know how to make Windows Explorer show file extensions, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.howtogeek.com/205086/beginner-how-to-make-windows-show-file-extensions/"},"this article on HowToGeek")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have an ADXL345 connected to your Spider as shown below, you may need to disconnect it from your Spider to avoid conflicts with the SD Card while loading the firmware."))),(0,r.kt)("h3",{id:"first-time-flashing-via-sshputtyusb"},"First time flashing via SSH(PuTTY)/USB"),(0,r.kt)("p",null,"While the SD Card method described above is the easiest, users that are\ncomfortable with SSH/PuTTY may prefer this more advanced method."),(0,r.kt)("p",null,"Fysetc provide instructions on installing Klipper here:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FYSETC/FYSETC-SPIDER#42-Klipper"},"https://github.com/FYSETC/FYSETC-SPIDER#42-Klipper")," but some parts of\nthat are less clear than one might wish so here is the sequence that\nworked for the author."),(0,r.kt)("p",null,"Make sure your board is connected to the Pi (USB-C on the Spider, USB-A\non the Pi). Connect with SSH (PuTTy for Windows users) to the Pi (login\npi, password raspberry if you did not change the defaults)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fysetc Spider V1.1 BT0 Jumper",src:n(7392).Z,width:"558",height:"406"})),(0,r.kt)("p",null,"Connect a jumper between 3.3V and BT0 on the Spider as shown above."),(0,r.kt)("p",null,"Press the reset button on the Spider."),(0,r.kt)("p",null,"On the Pi, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"dfu-util --list\n")),(0,r.kt)("p",null,"You should see a list of DFU devices. This is your Spider ready to have\nthe firmware uploaded."),(0,r.kt)("p",null,"Build the firmware which is covered here: ",(0,r.kt)("a",{parentName:"p",href:"/docs/manual-firmware-compilation"},"Manual Firmware Compilation")),(0,r.kt)("p",null,"Once the firmware is built on the Pi run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo service klipper stop\ndfu-util -a 0 -s 0x08000000:leave -D ~/klipper/out/klipper.bin\n")),(0,r.kt)("p",null,"You should see the firmware being written to your Spider."),(0,r.kt)("p",null,"Now remove the jumper between 3.3V and BT0 on the Spider. Press the reset button on the Spider."),(0,r.kt)("p",null,'Run "lsusb" on the Pi and you should see a device by the name "OpenMoko, Inc.". This is your Spider running Klipper.'),(0,r.kt)("p",null,'run the command "sudo service klipper start". RatOS should now be able to communicate with your Spider.'),(0,r.kt)("h3",{id:"klipper-updates"},"Klipper Updates"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Automatic firmware updates")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"RatOS automatically flashes the newest firmware to your\nSpider v1.1 when klipper is updated (if the klipper firmware has previously been flashed).\nYou shouldn't need any of the steps below unless that fails."))),(0,r.kt)("p",null,"Sometimes klipper makes changes to the microcontroller code and thus\nyour Spider need to be reflashed with new firmware. You can do that in 2\nways."),(0,r.kt)("p",null,"The updates can be installed with an SD Card (same method as\nthe first install described above) or over a Pi/Spider USB connection from RatOS\nusing SSH(PuTTY) and the provided\n~/klipper_config/config/boards/fysetc-spider/make-and-flash-mcu.sh\ncommand so you don't need to fiddle around with SD Cards."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"If you're going through initial setup please continue in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation#setup"},"installation guide")),(0,r.kt)("h2",{id:"adxl345-connection"},"ADXL345 Connection"),(0,r.kt)("p",null,"In your printer.cfg uncomment the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#   For ADXL345\n[resonance_tester]\naccel_chip: adxl345\n# Change the following to the centre of your bed.\nprobe_points: 200,200,20\n")),(0,r.kt)("p",null,"Connect the ADXL345 to the Spider like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Spider         ADXL345\n5V             VCC\nGND            GND\nMISO           SDO\nMOSI           SDA\nSCK            SCL\nCS             CS\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Fysetc Spider V1.1 ADXL Wiring",src:n(3280).Z,width:"1123",height:"794"})),(0,r.kt)("p",null,"See the Fysetc wiring plan for details: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FYSETC/FYSETC-SPIDER/blob/main/images/Spider_V1.0_Pinout.jpg"},"https://github.com/FYSETC/FYSETC-SPIDER/blob/main/images/Spider_V1.0_Pinout.jpg")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You might have to disconnect the ADSL345 from your Spider while you are uploading firmware using the SD Card."))),(0,r.kt)("h3",{id:"undervoltage-errors"},"Undervoltage errors"),(0,r.kt)("p",null,"If you are using the Fysetc TMC2209 step-sticks and you're getting Undervoltage errors from the stepper drivers make sure to either fully disable or enable stealthchop."),(0,r.kt)("p",null,'To completely disable stealthchop add this to the "### USER OVERRIDES" section of printer.cfg for each driver on your printer:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"    [tmc2209 stepper_x]\n    stealthchop_threshold: 0\n")),(0,r.kt)("p",null,"You can also enable stealthchop instead, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"    [tmc2209 stepper_x]\n    stealthchop_threshold: 9999999\n")),(0,r.kt)("p",null,"Klipper recommends using either stealthchop or spreadcycle for TMC drivers: ",(0,r.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/TMC_Drivers.html"},"https://www.klipper3d.org/TMC_Drivers.html")))}c.isMDXComponent=!0},7392:function(e,t,n){t.Z=n.p+"assets/images/BT0-jumper-2691e20534a99613dea48ee56d19f43a.png"},234:function(e,t,n){t.Z=n.p+"assets/images/Probe_Voltage-f5ef31336c3ee51b576b3f55318b9919.png"},3280:function(e,t,n){t.Z=n.p+"assets/images/SpiderADXL-Wiring-3965455180ee37baa4ec3accf755a611.png"},69:function(e,t,n){t.Z=n.p+"assets/images/spider-11-wiring-7416e4d9b382fa28b7f1eb62a61a8e99.png"}}]);