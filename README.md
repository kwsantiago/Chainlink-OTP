# Chainlink OTP Project

Chainlink Hackathon 2020: Building Universally Connected Smart Contracts

# Introduction

## Project Objectives

Team PrivKey is pleased to present this hackathon proposal project for one-time pads for secret communications. The smart contract will require a random key. A key is a block of numbers that is used to transform an original message (the plaintext) into a coded message (the ciphertext).

Included is a scope of work based on the project requirements for the workshop.

## Team Members

Kyle W. Santiago (KWS)

Thomas Potter (TC)

William K. Santiago (WKS)

Thomas Greco (TG)

## Proposal Overview

### Phase I - Creating the OTP

1. Create random keys one-time pads (OTPs) that are indexed with prefix reference number using one-time random key provided by Chainlink VRF
2. Format the message
3. Encrypt the message using one-time random key from the OTP
4. Transfer encrypted message to other party

### Possible Phase II (Optional) - Sending the encrypted message to receiver over IPFS

1. Put encrypted message in IPFS
2. IPFS returns hash content of encrypted message
3. Exchange of IPFS hash to other party
4. Other party request hash content of encrypted message from IPFS
5. Decrypt message using one-time pad information that has been physically exchanged securly

## Chainlink OTP Logical Overview
