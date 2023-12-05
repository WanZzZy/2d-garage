let garage = {
    cars: [
      { brand: 'Great Wall', model: 'Hover H5', year: 2011 },
      { brand: 'Nissan', model: 'X-Trail', year: 2019 },
      { brand: 'Tayota', model: 'RAV-4', year: 2008 }
    ],
    displayCars: function() {
        let html = '';
            for (let i = 0; i < this.cars.length; i++) {
            html += 'Бренд: ' + this.cars[i].brand + '<br>';
            html += 'Модель: ' + this.cars[i].model + '<br>';
            html += 'Год выпуска: ' + this.cars[i].year + '<br><br>';
        }
      document.body.innerHTML += html;
    }
  };
garage.displayCars();