import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.scss']
})
export class UploadExcelComponent {
  excelData: any[] = [];

  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      alert('Please upload a single Excel file.');
      return;
    }

    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const binaryData: string = e.target.result;
      const workbook: XLSX.WorkBook = XLSX.read(binaryData, { type: 'binary' });

      // Parse the first sheet
      const sheetName: string = workbook.SheetNames[0];
      const sheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

      // Convert sheet data to JSON
      this.excelData = XLSX.utils.sheet_to_json(sheet);
      console.log('Parsed Excel Data:', this.excelData);
    };

    reader.readAsBinaryString(target.files[0]);
  }

  uploadToDatabase() {
    // Simulate database upload logic
    console.log('Uploading the following data to the database:', this.excelData);
  }
}
