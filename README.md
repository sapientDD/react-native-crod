
#
# This file is licensed under the GNU Affero Public License v3
# See LICENSE.txt for details.

Crowdocracy App - It is going to be used for digital democracy allowing to vote on different subjects.

Copyright (C) 2017 Sapient organisation Amsterdam Netherlands

http://sapientnl.wixsite.com/sustain?utm_campaign=tr.im%2FSapient&utm_content=direct_input&utm_medium=no_referer&utm_source=tr.im

Authors that contributed:

@hulkdx (Mohammed Jafarzadeh Rezvan)

@09271993 

@bewerker

@tunaakgul (Recep Tuna Akgül)

@Aveann (Naëva Arnould)

@ShenayM (Shenay Mehmed)

@DauletIlakhunov (Daulet Ilakhunov)

@UgurGulger (Ugur Gulger)


# React Native Crod Project
<p align="center">
  <img src="http://i.imgur.com/agViZW1.png" width="200"/>
</p>

## Application Description
The mobile application of Crowdocracy is a solution for any organization that wants to include its staff into decision making and wants to know their opinions. Ever more organizations want to give their workers a part in making decisions about internal plans. However, the larger an organization is, the more difficult it is to ask everyone what they think. This app provides a central platform where users can vote on topics and proposals. The app contains categories of statements, so that users can turn on or off what kind of topics are shown to them. After the voting, user-friendly statistical data and graphics are produced to give an easily understandable overview of the results.
	Besides proposals and voting, the app provides the possibility to argue on the concerning topics and offer modifications on existing proposals. If a user thinks some proposal isn't formulated accurately or thinks it's a bad proposal, s/he has the possibility of commenting on this and offer a different proposal.

## How to run the application
- Clone the code
- Run npm install in CrodProject folder.
- Run react-native start-android to start the application.

## Hirearchy of the application
- The codes are in the CrodProject/app folder
- The main code is in index.android.js
- Screens folder : codes of each of the screens
- components folder : components of every screen (every screen is seprated with the screens name)
- data-manager folder : temporary contains the information about data source, it needs to be removed and replaced with back-end implimentation
- reducers folder : React-Native Redux files
- lib folder : library files (such as api, constants, etc.)
