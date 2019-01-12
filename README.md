# tagcard
SB Hacks 2019 project

by Yuxin Huang, Sifeng Li, Sen Lin, Jiaxi Ye

Mock data are in the 'src\providers\database\database.ts' file.

To use the data, in your **.ts file:

1. Add this in the first line:

    `import { Injectable } from '@angular/core';`

2. Change  ``constructor() {...``

    to `` constructor(public databaseProvider: DatabaseProvider) {...``
  
3. The data is in ``databaseProvider.data``. Do whatever you want to it.