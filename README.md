# Chainlink One Time Pad (OTP) Project

Chainlink Hackathon 2020: Building Universally Connected Smart Contracts

<p align="center">
  <img src="./images/OTP_center.png" />
</p>

# Introduction

## Project Objectives

Team PrivKey is pleased to present this hackathon proposal project for one-time pads (OTP). OTP is an encryption technique in which each character of a message is combined with a character from a random key stream. Many OTP generators exist online, but they use pseudo random number generators in order to create the random key stream. To add to the security of generating a OTP, this project uses Chainlink VRF which allows the user to verify the randomness used in creating the OTP.

Included is a scope of work based on the project requirements for the workshop.

## Team Members

Kyle W. Santiago (KWS)\
Thomas Potter (TC)\
William K. Santiago (WKS)\
Thomas Greco (TG)

## Proposal Overview

### Phase I - Creating the OTP

1. Request a random number using Chainlink VRF
2. Use the random number to create one-time pads (OTPs)
3. (Optional) Encrypt a user provided message using the OTPs
4. Transfer encrypted message to the other party

### Possible Phase II (Optional) - Sending the encrypted message to receiver over IPFS

1. Put encrypted message in IPFS
2. IPFS returns hash content of encrypted message
3. Exchange of IPFS hash to other party
4. Other party request hash content of encrypted message from IPFS
5. Decrypt message using one-time pad information that has been exchanged securely

<p align="center">
  <img src="./images/Chainlink_OTP_Overview.png" />
</p>
