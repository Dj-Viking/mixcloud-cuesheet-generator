#!/bin/bash

if ! [ -d sheets ]; then
     mkdir sheets;
fi

if ! [ -d converted_sheets ]; then
     mkdir converted_sheets;
fi

node dist/index.js

open converted_sheets;
