import React from 'react'
import {cloud} from '../../img/cloudy.svg'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Grid,
  GridItem,
Box,
HStack,
Input,
InputGroup,
InputLeftAddon,
Text,
Divider,
Flex,
Circle,
Menu,
MenuButton,
MenuList,
MenuItem,
Avatar,
Wrap,
WrapItem,
Button,
SimpleGrid,
Image
}
  from '@chakra-ui/react'
import {
Search2Icon,
HamburgerIcon,
ChevronDownIcon,
}
  from '@chakra-ui/icons'
const Header = () => {
  return (
    <>
      <HStack spacing='2px'>
        <Box w='25%' h='100vh' bg='#ffffff'>
          <InputGroup mt={5} ml={5} w='90%' color='#E2E8F0' variant='flushed'>
            <InputLeftAddon pointerEvents='none' bg="white" children={<Search2Icon color='gray.300' />} />
            <Input placeholder='Search Place' width='80%' pl={5} />
          </InputGroup>
          <Flex >
            <Box boxSize='70%' mt={5} w='55%' h='50%' flexDirection={'column'}  ml={5}>
              <img src="img/cloudy.svg" alt="cloud" ></img>
              <Box >
                <Text fontSize='3xl' color='blue.400' fontWeight='semibold'>
                  20&#8451;
                </Text>
                <Text fontWeight='semibold'>
                  Monday,
                  <Text as="span" color='gray.300'>5:14</Text>
                </Text>
              </Box>
            </Box>
          </Flex>
          <Divider orientation='horizontal' mt={8} />

          <Box boxSize='30%' mt={5} ml={5}>
            <Flex >
              <img src={cloud} alt="cloud" width='10%'>
              </img>
              <Text mt={2} ml={3}>Mostly Cloudy</Text>
            </Flex>
            <Flex mt={5}>
              <img src={rain} alt="rain" width='10%' >
              </img>
              <Text ml={3}>Rain - 30%</Text>
            </Flex>
          </Box>
          <Box boxSize='70%' w='80%' height='22%' border={2} borderStyle='dotted' color={'gray'} mt={9} ml={4}>
            <Flex mt={7}>
              <Box ml={4} >
                <HamburgerIcon w={45} h={30} />
              </Box>
              <Box>
                <Text fontSize='2xl' fontWeight='semibold' color={'black'}>
                  Budhanilkantha,
                </Text>
                <Text fontSize='2xl' fontWeight='semibold' ml={4} color={'black'}>Kathmandu
                  <Text as='span'>,Nepal</Text>
                </Text>
              </Box>
            </Flex>
          </Box>

        </Box>
        <Box w='75%' h='110vh' bg='#EDF2F7'>
          <Box boxSize='10%' width='100%' mt={4}>
            <Flex justify={'space-between'}>
              <Box ml={5}>
                <Flex>
                  <Text>Today</Text>
                  <Text ml={10}>Week</Text>
                </Flex>
              </Box>
              <Box mr={50}>
                <Flex>
                  <Box>
                    <Flex>
                      <Circle size='40px' bg='blue.400'>
                        <Text>&#8451;</Text>
                      </Circle>
                      <Circle size='40px' bg='gray.400' ml={10}>
                        <Text>&#8457;</Text>
                      </Circle>
                    </Flex>
                  </Box>
                  <Box ml={25}>
                    <Menu >
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} h={50} w={250} ml={50}>

                        <Wrap>
                          <WrapItem>
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            <Text pt={4} pl={4}>Diagonal Tech</Text>
                          </WrapItem>
                        </Wrap>

                      </MenuButton>
                      <MenuList >
                        <MenuItem >Download</MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box w='100%' mt={1} p={3}>
            <Flex gap={2} >
              <Box flex="1" bg={'gray.200'} >

                <Text>Mon</Text>
                <Box p={4}>
                <img src={cloud} alt="cloud" ></img>
                </Box>
                <Text pl={14} >20&#8451;</Text>

              </Box>
              <Box flex="1" bg={'gray.200'}>
                <Text>Tue</Text>
                <Box p={4}>
                  <img src={sun} alt="cloud" ></img>
                </Box>
                <Text pl={14} pb={2}>25&#8451;</Text>
              </Box>
              <Box flex="1" bg={'gray.200'}>
                <Text>Wed</Text>
                <Box p={4}>
                  <img src={rain} alt="cloud" ></img>
                </Box>
                <Text pl={14}>18&#8451;</Text>
              </Box>
              <Box flex="1" bg={'gray.200'}>
                <Text>Thus</Text>
                <Box p={4}>
                  <img src={cloud} alt="cloud" ></img>
                </Box>
                <Text pl={14}>20&#8451;</Text>
              </Box>
              <Box flex="1" bg={'gray.200'}>
                <Text>Fri</Text>
                <Box p={4}>
                  <img src={cloud} alt="cloud" ></img>
                </Box>
                <Text pl={14}>20&#8451;</Text>
              </Box>
              <Box flex="1" bg={'gray.200'}>
                <Text>Sat</Text>
                <Box p={4}>
                  <img src={rain} alt="cloud" ></img>
                </Box>
                <Text pl={14}>20&#8451;</Text>
              </Box>
              <Box flex="1" bg={'gray.200'}>
                <Text>Sun</Text>
                <Box p={4}>
                  <img src={cloud} alt="cloud" ></img>
                </Box>
                <Text pl={14}>20&#8451;</Text>
              </Box>
            </Flex>
          </Box>
          <Box w='100%' alignItems={'left'}>
            <Flex justifyContent={'left'} >
              <Text m={3}>Today
                <Text as='span'> Highlight</Text>
              </Text>
            </Flex>
          </Box>
            <SimpleGrid columns={[2, null, 3]} spacing='30px' m={1}>
              <Box bg='gray.200'>
                <Text as='h2' p={2}>Sunrise and Sunset</Text>
                <Flex >
                  <Image src={rise} alt="Set" boxSize='3rem' p={0}/>
                  <Text p={2}>6:30 am</Text>
                  </Flex>
                
                <Flex mb={4}>
                  <Image src={set} alt="Set" boxSize='3rem'/>
                  <Text p={3}>5: 40 am</Text>
                </Flex>
              </Box>
              <Grid bg='gray.200' 
              templateRows='repeat(3, 1fr)'
              templateColumns='repeat(3, 1fr)'
            >

              <GridItem rowSpan={1} colSpan={2} bg='gray.200' >
              <Text as='h2' p={2}>Temparature</Text>
              </GridItem>
              <GridItem rowSpan={3} colSpan={1} bg='gray.200' display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Flex w={20} h={100}>
                 <Image src={tem} alt="thermo"></Image>
                 </Flex>
                 </GridItem>
              <GridItem  rowSpan={1} colSpan={2} bg='gray.200' >
              <Text fontSize={'2xl'} p={3}> 20&#176;<Text as={'span'} fontSize={'0.8rem'}>c</Text></Text>
              </GridItem>
              <GridItem  colSpan={2} bg='gray.200' >
              <Text fontSize={'2xl'} p={3}> Kathmandu, Nepal</Text>
              </GridItem>
              </Grid>
              <Box bg='gray.200' >
              <Grid bg='gray.200' 
              templateRows='repeat(3, 1fr)'
              templateColumns='repeat(3, 1fr)'
            >

              <GridItem rowSpan={1} colSpan={2} bg='gray.200' >
              <Text as='h2' p={2}>Wind Status</Text>
              </GridItem>
              <GridItem  rowSpan={1} colSpan={2} bg='gray.200' >
              <Text fontSize={'2xl'} p={3}> 8.72<Text as={'span'} fontSize={'0.8rem'}>km/h</Text></Text>
              </GridItem>
              <GridItem  colSpan={2} bg='gray.200' >
              <Text fontSize={'2xl'} p={3}> Status:</Text>
              </GridItem>
              </Grid>


              </Box>
              <Box bg='gray.200' >
              <Grid bg='gray.200' 
              templateRows='repeat(3, 1fr)'
              templateColumns='repeat(3, 1fr)'
            >

              <GridItem rowSpan={1} colSpan={2} bg='gray.200' >
              <Text as='h2' p={2}>Humidity</Text>
              </GridItem>
              <GridItem rowSpan={3} colSpan={1} bg='gray.200' display={'flex'} flexDirection={'column'} justifyContent={'center'}>
              <Slider
  aria-label='slider-ex-3'
  value={90}
  defaultValue={0}
  orientation='vertical'
  minH='32'
  height='20px'
>
  <SliderTrack w='24px' borderRadius="%">
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb width='22px' height='22px' borderRadius="50%" bg={'blue.400'} />
</Slider>
                 </GridItem>
              <GridItem  rowSpan={1} colSpan={2} bg='gray.200' >
              <Text fontSize={'2xl'} p={3}> 12<Text as={'span'} fontSize={'0.8rem'}>%</Text></Text>
              </GridItem>
              <GridItem  colSpan={2} bg='gray.200' >
              <Text fontSize={'2xl'} p={3}> Status:
              <Text as={'span'}>Good Quality</Text></Text>
              </GridItem>
              </Grid>
                </Box>
              <Box bg='gray.200' >
              <Grid bg='gray.200' 
              templateRows='repeat(3, 1fr)'
              templateColumns='repeat(3, 1fr)'
            >

              <GridItem rowSpan={1} colSpan={2} bg='gray.200' >
              <Text as='h2' p={2}>Visibility</Text>
              </GridItem>
              <GridItem rowSpan={3} colSpan={1} bg='gray.200' display={'flex'} flexDirection={'column'} justifyContent={'center'}>
              <Slider
  aria-label='slider-ex-3'
  value={50}
  defaultValue={0}
  orientation='vertical'
  minH='32'
  height='20px'
>
  <SliderTrack w='24px' borderRadius="%">
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb width='22px' height='22px' borderRadius="50%" bg={'orange'} />
</Slider>
                 </GridItem>
              <GridItem  rowSpan={1} colSpan={2} bg='gray.200' >
              <Text fontSize={'2xl'} p={3}> 9.43<Text as={'span'} fontSize={'0.8rem'}>km/h</Text></Text>
              </GridItem>
              <GridItem  colSpan={2} bg='gray.200' >
              <Text fontSize={'2xl'} p={3}> Status:
              <Text as={'span'}>Average</Text></Text>
              </GridItem>
              </Grid>
              </Box>
              <Box bg='gray.200' >
              <Grid bg='gray.200' 
              templateRows='repeat(3, 1fr)'
              templateColumns='repeat(3, 1fr)'
            >

              <GridItem rowSpan={1} colSpan={2} bg='gray.200' >
              <Text as='h2' p={2}>Air Quality</Text>
              </GridItem>
              <GridItem rowSpan={3} colSpan={1} bg='gray.200' display={'flex'} flexDirection={'column'} justifyContent={'center'}>
              <Slider
  aria-label='slider-ex-3'
  value={0}
  defaultValue={0}
  orientation='vertical'
  minH='32'
  height='20px'
>
  <SliderTrack w='24px' borderRadius="%">
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb width='22px' height='22px' borderRadius="50%" bg={'tomato'} />
</Slider>
                 </GridItem>
              <GridItem  rowSpan={1} colSpan={2} bg='gray.200' >
              <Text fontSize={'2xl'} p={3}> 9.43<Text as={'span'} fontSize={'0.8rem'}>km/h</Text></Text>
              </GridItem>
              <GridItem  colSpan={2} bg='gray.200' >
              <Text fontSize={'2xl'} p={3}> Status:
              <Text as={'span'}> Bad Quality</Text></Text>
              </GridItem>
              </Grid>
              </Box>
            </SimpleGrid>
          </Box>

      </HStack>
    </>
  )
}

export default Header