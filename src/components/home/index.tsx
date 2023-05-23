import * as React from 'react';
import { CoverSectionImage } from '../CoverSectionImage/CoverSectionImage'
import { Image as ImageType} from '../../types/CoreTypes/index'
import Flight from '../FlightApi/Flight'

interface IAppProps {
}

 
const Home: React.FunctionComponent<IAppProps> = (props) => {

    const image : ImageType = {
        handle: 'https://media.graphcms.com/B7dgL3o0TJGzEkwrvAZX',
        title: '600px'
    }
    const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus provident similique dolore impedit adipisci! Animi eaque quae aut consequuntur.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus provident similique dolore impedit adipisci! Animi eaque quae aut consequuntur."
  
  return(
    <main>
    <CoverSectionImage 
          id= {'string'}
          backgroundImageDesktop= {image} 
          backgroundImageMobile= {image} 
          description= {description} 
          headline= {'string'}
          primaryButtonLink= {'string'} 
          primaryButtonText= {'string'} 
          secondaryButtonLink= {'string'} 
          secondaryButtonText= {'string'} 
    />
    <Flight />
  </main>
  );
};

export default Home;
