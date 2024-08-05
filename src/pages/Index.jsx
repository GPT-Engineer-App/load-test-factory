import { useState, useEffect } from 'react';
import { Paw, Heart, Info, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const DogBreeds = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBreeds, setFilteredBreeds] = useState([]);

  const allBreeds = [
    'Labrador Retriever', 'German Shepherd', 'Golden Retriever', 'French Bulldog', 'Bulldog', 'Poodle',
    'Beagle', 'Rottweiler', 'Boxer', 'Dachshund', 'Siberian Husky', 'Great Dane'
  ];

  useEffect(() => {
    setFilteredBreeds(
      allBreeds.filter(breed => breed.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Search breeds..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button variant="outline"><Search className="h-4 w-4" /></Button>
      </div>
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filteredBreeds.map((breed) => (
            <motion.div
              key={breed}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{breed}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={`https://source.unsplash.com/400x300/?${breed.toLowerCase().replace(' ', '-')}`} alt={breed} className="w-full h-48 object-cover rounded-md mb-2" />
                  <p className="text-sm text-gray-600">A popular and beloved dog breed known for its friendly nature and versatility.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const FunFacts = () => {
  const facts = [
    "Dogs have a sense of smell that's up to 100,000 times stronger than humans.",
    "The Basenji is the only breed of dog that can't bark, but they can yodel!",
    "A dog's nose print is unique, much like a human's fingerprint.",
    "Greyhounds can run up to 45 miles per hour, making them the fastest dogs.",
    "The tallest dog ever recorded was a Great Dane named Zeus, who stood 44 inches tall."
  ];

  return (
    <ul className="space-y-4">
      {facts.map((fact, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-start space-x-2 bg-white p-4 rounded-lg shadow-md"
        >
          <Paw className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
          <span>{fact}</span>
        </motion.li>
      ))}
    </ul>
  );
};

const CareTips = () => {
  const tips = [
    { title: "Balanced Diet", content: "Provide a balanced diet appropriate for your dog's age, size, and activity level." },
    { title: "Regular Exercise", content: "Ensure your dog gets regular exercise through walks, playtime, and activities." },
    { title: "Veterinary Care", content: "Schedule regular check-ups with a veterinarian for vaccinations and health screenings." },
    { title: "Grooming", content: "Groom your dog regularly, including brushing their coat and teeth." },
    { title: "Mental Stimulation", content: "Offer mental stimulation through training, puzzles, and interactive toys." }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold mb-6">Essential Dog Care Tips</h3>
      {tips.map((tip, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{tip.content}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-center text-blue-800"
        >
          All About Dogs
        </motion.h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="breeds" className="text-lg"><Paw className="mr-2 h-5 w-5" /> Dog Breeds</TabsTrigger>
            <TabsTrigger value="facts" className="text-lg"><Info className="mr-2 h-5 w-5" /> Fun Facts</TabsTrigger>
            <TabsTrigger value="care" className="text-lg"><Heart className="mr-2 h-5 w-5" /> Care Tips</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="breeds">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Popular Dog Breeds</CardTitle>
                    <CardDescription>Explore some of the most beloved dog breeds.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <DogBreeds />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="facts">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Fun Dog Facts</CardTitle>
                    <CardDescription>Discover interesting facts about our canine companions.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FunFacts />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="care">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Dog Care Tips</CardTitle>
                    <CardDescription>Learn how to keep your furry friend happy and healthy.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CareTips />
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
