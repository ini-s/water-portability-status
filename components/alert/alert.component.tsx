import React, { useState } from 'react';
import Image from 'next/image'
import { AlertContainer } from '../../styles/alert.styles';

const Alert = () => {
    const [isUnsafe, setIsUnsafe] = useState(true);
    return (
        <AlertContainer>
          <div id="textdesign">
            This Water is 
          </div>
          <div>
            {isUnsafe ? (
              <>
                <p>Unsafe for Use</p>
                <Image 
                  src="/images/redthumbs.jpg"
                  width={80}
                  height={80}
                  alt=""
                />
              </>
            ) : (
              <>
                <p>Safe for Use</p>
                <Image 
                  src="/images/greenthumbs.png"
                  width={80}
                  height={80}
                  alt=""
                />
              </>
            )}
          </div>
        </AlertContainer>
      );
    };
    


export default Alert;
