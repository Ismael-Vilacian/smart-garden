import './App.css';
import React from 'react';
import { HeaderStandard } from './components/HeaderStandard.tsx';
import { ContainerGardenData } from './components/ContainerGardenData.tsx';
import { GardenList } from './components/GardenList.tsx';

function App() {
  return (
    <div className="app">
      <HeaderStandard userName="João Moreira"></HeaderStandard>

      <div className='app_data-garden'>
        <ContainerGardenData data={[
          { value: 28, description: 'Temperatura média', temperature: true },
          { value: 60, description: 'Umidade relativa do ar' },
          { value: 70, description: 'Umidade média do solo' }
        ]}></ContainerGardenData>
      </div>

      <div className='app_garden-list'>
        <GardenList data={[
          { description: 'Jardins Marceli', imagePath: 'assets/garden/img-1.jpeg' },
          { description: 'Jardins Moreira', imagePath: 'assets/garden/img-2.jpg' },
          { description: 'Jardins Aroeira', imagePath: 'assets/garden/img-3.jpg' },
          { description: 'Jardins Amambaia', imagePath: 'assets/garden/img-4.jpg' }
        ]}></GardenList>
      </div>
    </div>
  );
}

export default App;
