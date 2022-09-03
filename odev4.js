/** 
 * Size verilen iki adet array’den
 * uygun methodları kullanarak yeni
 * bir object oluşturmanız gerekiyor.
 * Ve bu obje key-value şeklinde 
 * doğru eşleştirme yapılarak
 * oluşturulmalı. 
 */

 let mockData = {
    cols: ["Name_Surname", "Company", "Email", "Date", "Country", "City"],
    data: [
      [
        "Hyacinth Vincent",
        "Duis Corporation",
        "iaculis.enim@magnaCrasconvallis.ca",
        "28/06/2022",
        "Eritrea",
        "Lyubertsy",
      ],
      [
        "Brenden Martinez",
        "Volutpat Nunc Associates",
        "iaculis@estMauris.org",
        "24/03/2021",
        "British Indian Ocean Territory",
        "Colwood",
      ],
    ],
  };
  
  let output = [];
  
  Array.prototype.createObject = function (mockData) {
    for (let j = 0; j < mockData.data.length; j++) {
      let data = mockData.data[j];
      output[j] = {};
      for (let i = 0; i < mockData.cols.length; i++) {
        let col = mockData.cols[i];
        output[j][col] = data[i];
      }
    }
  }
  
  output.createObject(mockData);
  console.log(output)