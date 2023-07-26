import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const mesCartes = [
  {
    title: "Hallo",
    description:" ich bin description",
    prix:"amazing"
  },
]

function MesCards() {
  return (
    <div>{mesCartes.map((item) => (
      <div key={item.title} className="px-2">
            <Card className='h-64  w-72'>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.description}</div>
                <p className="text-xs text-muted-foreground">
                  {item.prix}
                </p>
              </CardContent>
            </Card>
          </div>
    )) }</div>
  )
}

export default MesCards