import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css"

import React from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const mesCartes = [
  {
    title: "Hallo",
    description: " ich bin description",
    prix: "amazing"
  },
  {
    title: "Hallo",
    description: " ich bin description",
    prix: "amazing"
  },
  {
    title: "Hallo",
    description: " ich bin description",
    prix: "amazing"
  },
  {
    title: "Hallo",
    description: " ich bin description",
    prix: "amazing"
  },
  {
    title: "Hallo",
    description: " ich bin description",
    prix: "amazing"
  },
  {
    title: "Hallo",
    description: " ich bin description",
    prix: "amazing"
  },
  {
    title: "Hallo",
    description: " ich bin description",
    prix: "amazing"
  },
  
];

function MesCards() {
  return (
    <>
      <ScrollArea>
      <div className="flex space-x-2 pb-4">
      {mesCartes.map((item) => (
          <div key={item.title} className="">
            <Card className='h-64 w-80'>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.prix}</div>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </div>
      ))}
          </div>
        <ScrollBar orientation='horizontal'/>
      </ScrollArea>
   
    </>
    
  )
}

export default MesCards