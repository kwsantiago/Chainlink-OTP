# Chainlink Hackathon 2020: One Time Pad (OTP) Project

### Try it out [here](http://otp-frontend.s3-website-us-east-1.amazonaws.com/)! (Note that you must first connect to your MetaMask and refresh the page in order to view the front end)

<p align="center">
  <img src="./images/OTP_center.png" />
</p>

# Introduction

## Project Objectives

Team **PrivKey** is pleased to present this hackathon proposal project for one-time pads (OTP). OTP is an encryption technique in which each character of a message is combined with a character from a random key stream. Many OTP generators exist online, but they use pseudo random number generators in order to create the random key stream. To add to the security of generating a OTP, this project uses Chainlink VRF which allows the user to verify the randomness used in creating the OTP.

Included is a scope of work based on the project requirements for the workshop.

## Team Members

Kyle W. Santiago (KWS)\
Thomas Potter (TC)\
William K. Santiago (WKS)\
Thomas Greco (TG)

## Proposal Overview

### Phase I - Creating the OTP

**1.** User requests OTPs based on how long they want the pads to be and how many they want.

**2.** A VRF call is made requesting a random number which will then be use to create one-time pads (OTPs)

**3.** (Optional) Encrypt a user provided message using the OTPs

**4.** Transfer encrypted message to the other party

Video demonstration: https://youtu.be/DToyi2CBTJk

<p align="center">
  <img src="./images/Chainlink_OTP_Overview.png" />
</p>
