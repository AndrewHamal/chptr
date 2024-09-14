'use client'

import { Dropdown, MenuProps, Space } from "antd";
import Image from "next/image";
import Button from "./components/Button";
import { CheckCircleOutlined, CheckOutlined, ClockCircleOutlined, DownOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import React from "react";

export default function Home() {

  const items: MenuProps['items'] = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item（disabled）',
      key: '3',
      disabled: true,
    },
  ];

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) return <></>

  return (
    <>
      <nav className="px-2 md:px-4 py-3 m-auto">
        <div className="flex items-center">
          <div className="logo">
            <Image
              width={125}
              height={125}
              alt="logo"
              src='https://www.chptr.house/img/chptr-logo-green.png'
            />
          </div>

          <div className="lg:hidden ml-auto">
            <Image width={0} height={0} className="w-[30px] h-[30px]" sizes="100%" src={require('./assets/menu.svg')} alt="" />
          </div>

          <div className="menus hidden lg:block ml-auto">
            <ul className="flex items-center gap-8">
              <li className="flex items-center">
                <Dropdown menu={{ items }}>
                  <Link href={''}>
                    <div className="flex items-center gap-1 py-2">
                      Our Story
                    </div>
                  </Link>
                </Dropdown>
              </li>
              <li>
                <Dropdown menu={{ items }}>
                  <Link href={''}>
                    <Space className="flex items-center gap-1 py-2">
                      Our Team
                    </Space>
                  </Link>
                </Dropdown>
              </li>

              <li>
                <Dropdown menu={{ items }}>
                  <Link href={''}>
                    <Space className="flex items-center gap-1 py-2">
                      What We Do
                    </Space>
                  </Link>
                </Dropdown>
              </li>
              <li>
                <Dropdown menu={{ items }}>
                  <Link href={''}>
                    <Space className="flex items-center gap-1 py-2">
                      Become A Vendor
                    </Space>
                  </Link>
                </Dropdown>
              </li>

              <li className="gap-2 flex">
                <Button
                  href="/"
                  preset="secondary"
                  text="Login"
                />

                <Button
                  href="/"
                  preset="primary"
                  text="Get Started"
                />
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <section>
        <div className="lg:container m-auto px-2">
          <div className="mt-8 md:mt-20">
            <div className="w-[80%] text-center m-auto">
              <h1 className="text-3xl md:text-7xl font-[rec] font-[900] leading-[40px] md:leading-[80px]">
                Gather, share, and hold
                <span className="text-[#04784a]"> memories of loved ones lost</span>
              </h1>
            </div>
          </div>

          <div className="mt-8 md:mt-20 relative rounded-[20px] md:rounded-[90px] overflow-hidden">
            <div className="bg-[#000]/[0.5] hidden md:block absolute top-0 bottom-0 left-0 right-0"></div>
            <div className="absolute bottom-20 left-20 z-[99] mr-20">

              <p className="hidden md:block text-white text-4xl font-[rec]">
                Receive priority access to Chptr and a personal onboarding experience with a team member.
              </p>

              <div className="mt-11 hidden md:block flex flex-wrap gap-4">
                <Button
                  href="/"
                  preset="white"
                  text="Get Started"
                  size='lg'
                />

                <Button
                  href="/"
                  size='lg'
                  preset="primary"
                  text="Funeral Directors"
                />
              </div>
            </div>
            <video autoPlay={true} muted={true} loop={true}>
              <source src="https://cdn.prod.website-files.com/612ceb40385e587618b55ff1/6189a73269825d0578939693_chptr-homepage_desktop_1920x1080_FINAL-transcode.mp4" data-wf-ignore="true" />
              <source src="https://cdn.prod.website-files.com/612ceb40385e587618b55ff1/6189a73269825d0578939693_chptr-homepage_desktop_1920x1080_FINAL-transcode.webm" data-wf-ignore="true" />
            </video>
          </div>

          <div className="mt-11 md:hidden items-center justify-around flex flex-wrap gap-3">
            <Button
              href="/"
              preset="secondary"
              text="Get Started"
            />

            <Button
              href="/"
              preset="primary"
              text="Funeral Directors"
            />
          </div>
        </div>
      </section>

      <section className="my-11 md:mb-[80px] md:mt-20">
        <div className="">

          <Marquee className="justify-around overflow-x-scroll overflow-y-hidden py-11 gap-3">
            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] overflow-hidden shadow-xl min-w-[130px] w-[130px] rounded-full">
              <img src="https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/4fa562a2-948a-4c55-b480-d25c1fae3608/CHPTR-6.jpg" className="object-cover w-[100%]" alt="" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] shadow-xl  min-w-[130px] w-[130px] rounded-full overflow-hidden">
              <img src="https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/79ebbfa2-5fbe-49c5-b33f-3db097e010de/Tezza-0206+2.jpg" alt="" className="object-cover w-[100%] h-[100%]" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] shadow-xl  min-w-[130px] w-[130px] rounded-full overflow-hidden">
              <img src="https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/943f9e73-f5b1-4daf-be6d-5809e2cb76c6/CHPTR-1.jpg" alt="" className="object-cover w-[100%] h-[100%]" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] shadow-xl  min-w-[130px] w-[130px] rounded-full overflow-hidden">
              <img src="https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/9dcb1d83-0bc9-4ada-b630-3a175611c85e/CD2-16.jpg" alt="" className="object-cover w-[100%] h-[100%]" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] shadow-xl  min-w-[130px] w-[130px] rounded-full overflow-hidden">
              <img src="https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/4d603116-e420-4778-ad1b-19dfda0329aa/Tezza-4479.JPG" alt="" className="object-cover w-[100%] h-[100%]" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] overflow-hidden shadow-xl min-w-[130px] w-[130px] rounded-full">
              <img src="https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/4fa562a2-948a-4c55-b480-d25c1fae3608/CHPTR-6.jpg" className="object-cover w-[100%]" alt="" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] shadow-xl  min-w-[130px] w-[130px] rounded-full overflow-hidden">
              <img src="https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/79ebbfa2-5fbe-49c5-b33f-3db097e010de/Tezza-0206+2.jpg" alt="" className="object-cover w-[100%] h-[100%]" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] shadow-xl  min-w-[130px] w-[130px] rounded-full overflow-hidden">
              <img src="https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/9dcb1d83-0bc9-4ada-b630-3a175611c85e/CD2-16.jpg" alt="" className="object-cover w-[100%] h-[100%]" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] shadow-xl  min-w-[130px] w-[130px] rounded-full overflow-hidden">
              <img src="https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/4d603116-e420-4778-ad1b-19dfda0329aa/Tezza-4479.JPG" alt="" className="object-cover w-[100%] h-[100%]" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] shadow-xl  min-w-[130px] w-[130px] rounded-full overflow-hidden">
              <img src="https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/4d603116-e420-4778-ad1b-19dfda0329aa/Tezza-4479.JPG" alt="" className="object-cover w-[100%] h-[100%]" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] shadow-xl  min-w-[130px] w-[130px] rounded-full overflow-hidden">
              <img src="https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/251eae55-3a1a-4e92-8b2f-738954fe6d95/Tezza-2573.JPG" alt="" className="object-cover w-[100%] h-[100%]" />
            </div>

          </Marquee>
        </div>
      </section>

      <section className="mb-[80px] lg:mb-[170px]">
        <div className="lg:container m-auto px-2">
          <div className="">
            <p className="text-[13px] mb-1 font-[600] uppercase text-[#04784a]">Mission</p>
            <h2 className="text-2xl md:text-5xl font-[rec] font-[900] text-[#160e41]">What <span className="text-[#04784a]">chptr </span>do?</h2>
          </div>

          <div className="px-4 pt-11 grid md:grid-cols-3 md:pt-[125px] gap-8">
            <div className="relative">
              <div className="absolute z-[-1] top-[-15px] left-[-15px]">
                <div className="h-[85px] w-[85px] text-[25px] bg-linear flex items-center justify-center rounded-full text-[#fff] shadow-xl shadow-[#04784a]">

                </div>
              </div>

              <div className="glossy-card">

                <h3 className="font-[rec] font-[900] text-[#160e41] text-2xl">About us</h3>

                <p className="mt-2 text-gray-600">Chptr is a mobile-first memorialization platform to gather, share, and hold memories for a lost loved one’s life for generations to come.</p>
              </div>
            </div>

            <div className="md:mt-[-80px]">
              <div className="glossy-card relative">


                <h3 className="font-[rec] font-[900] text-[#160e41] text-2xl">Technology
                </h3>

                <p className="mt-2 text-gray-600">Manage attendance, send announcements, hire vendors, track point systems, and more through the Chptr platform.</p>
              </div>
            </div>

            <div className="glossy-card relative">

              <h3 className="font-[rec] font-[900] text-[#160e41] text-2xl">Service</h3>

              <p className="mt-2 text-gray-600">Executive guidance, vendor vetting, service hotline, and software training with your Chptr Team. </p>
            </div>


          </div>
        </div>
      </section>

      <section className="mb-[80px] md:mb-[150px]">
        <div className="lg:container m-auto px-2">
          <div className="">
            {/* <p className="text-[13px] mb-1 font-[600] uppercase text-[#04784a]">Solution</p> */}
            <h2 className="text-2xl md:text-5xl font-[rec] font-[900] text-[#160e41]">A community that celebrates and <br /> <span className="text-[#04784a]">honors the lives of those we’ve lost</span></h2>
          </div>

          <div className="flex gap-5 md:gap-20 mt-11">
            <div className="relative">
              <div className="absolute left-[50%] translate-x-[-50%] shadow bg-[#fafafa] w-[15px] h-[15px] border-[#04784a] border-[4px] rounded-full"></div>
              <div className="h-[100%] w-[2px] bg-[#04784a]/[0.2]"></div>

              <div className="absolute bottom-0 left-[50%] translate-x-[-50%] shadow bg-[#fafafa] w-[15px] h-[15px] border-[#04784a]  border-[4px] rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-20 py-[30px] flex-grow">
              <div className="my-auto">
                <div className="self-start">
                  <h3 className="text-2xl uppercase font-[rec] font-[900] text-[#160e41]">WHO WE ARE.</h3>
                  <div className="h-[5px] w-[60px] border-b-[3px] border-[#04784a]"></div>
                </div>

                <p className="mt-5 text-gray-500">
                  We are a service-oriented operations management company built by SEC Greeks. <br /> <br />

                  We are here to elevate the Greek Life Experience and Empower Young Leaders.
                </p>

                <div className="mt-8">
                  <Button
                    href="/"
                    preset="secondary"
                    text="Get Started"
                  />
                </div>

                {/* <div className="mt-5">
                  <ul>
                    <li className="flex item-center gap-2 mb-3">
                      <div className="scale-[0.8] bg-[#5856d6]/[0.3] text-white w-[25px] h-[25px] p-1 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} size='xs' color="#5856d6" />
                      </div>
                      <p className="text-[14px] text-gray-500">Quick aptitude test in just 3 minutes</p>
                    </li>

                    <li className="flex item-center gap-2 mb-3">
                      <div className="scale-[0.8] bg-[#5856d6]/[0.3] text-white w-[25px] h-[25px] p-1 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} size='xs' color="#5856d6" />
                      </div>
                      <p className="text-[14px] text-gray-500">Customizable interface</p>
                    </li>

                    <li className="flex item-center gap-2 mb-3">
                      <div className="scale-[0.8] bg-[#5856d6]/[0.3] text-white w-[25px] h-[25px] p-1 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} size='xs' color="#5856d6" />
                      </div>
                      <p className="text-[14px] text-gray-500">Forecast for higher conversion</p>
                    </li>

                    <li className="flex item-center gap-2">
                      <div className="scale-[0.8] bg-[#5856d6]/[0.3] text-white w-[25px] h-[25px] p-1 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} size='xs' color="#5856d6" />
                      </div>
                      <p className="text-[14px] text-gray-500">Accessible 24/7 from all devices</p>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div>
                <Image
                  width={0}
                  height={0}
                  className="w-[100%] h-[400px] object-cover rounded-[20px]"
                  sizes="100%"
                  alt=""
                  src={'https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/74a93b55-d74c-4ca0-a4b0-0f06ead0264c/rUyfCQuA.jpeg'}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5 md:gap-20">
            <div className="relative">
              <div className="h-[100%] w-[2px] bg-[#04784a]/[0.2]"></div>
              <div className="absolute bottom-0 left-[50%] translate-x-[-50%] shadow bg-[#fafafa] w-[15px] h-[15px] border-[#04784a]  border-[4px] rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-20 py-[30px]">
              <div>
                <Image
                  width={0}
                  height={0}
                  className="w-[100%] overflow-hidden h-[400px] object-top object-cover rounded-[20px]"
                  sizes="100%"
                  alt=""
                  src={'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/c3/82/f6/c382f6c2-2113-86f8-d3a6-37a194d427fb/50918558-d950-4435-be1f-b2402f9f3388_1303.png/460x0w.webp'}
                />
              </div>

              <div className="my-auto">
                <div className="self-start">
                  <h3 className="text-2xl uppercase font-[rec] font-[900] text-[#160e41]">Check Our technology</h3>
                  <div className="h-[5px] w-[60px] border-b-[3px] border-[#04784a]"></div>
                </div>

                <p className="mt-5 text-gray-500">
                  From daily operations to administrative tasks, including announcements, points, member directory, event scheduling, and vendor management - Chptr is one central hub!
                </p>

                <div className="mt-8">
                  <Button
                    href="/"
                    preset="secondary"
                    text="Get Started"
                  />
                </div>

              </div>

            </div>
          </div>

          <div className="flex gap-5 md:gap-20">
            <div className="relative">
              <div className="h-[100%] w-[2px] bg-[#04784a]/[0.2]"></div>
              <div className="absolute bottom-0 left-[50%] translate-x-[-50%] shadow bg-[#fafafa] w-[15px] h-[15px] border-[#04784a]  border-[4px] rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-11 py-[30px]">
              <div className="my-auto">
                <div className="self-start">
                  <h3 className="text-2xl uppercase font-[rec] font-[900] text-[#160e41]">OUR MISSION BECAME CLEAR…</h3>
                  <div className="h-[5px] w-[60px] border-b-[3px] border-[#04784a]"></div>
                </div>

                <p className="mt-5 text-gray-500">
                  Everything is managed centrally in the specialist partner portal. It allows the generation of Reports, processing of Funding, the creation of VDZ forms, the startup of plants and maintenancies.
                </p>

                <div className="mt-8">
                  <Button
                    href="/"
                    preset="secondary"
                    text="Get Started"
                  />
                </div>

              </div>
              <div>
                <Image
                  width={0}
                  height={0}
                  className="w-[100%] overflow-hidden h-[400px] object-top object-cover rounded-[20px]"
                  sizes="100%"
                  alt=""
                  src={'https://images.squarespace-cdn.com/content/v1/663954f100cb606cd13af00d/9d8431ea-ef5f-4172-8024-0f8dbed5534f/1E8A9991-Enhanced-NR.JPG'}
                />
              </div>
            </div>
          </div>



        </div>
      </section>

      <section className="mb-[80px]">
        <div className="lg:container m-auto px-2">
          <div className="mb-9">
            <h2 className="text-2xl md:text-5xl font-[rec] font-[900] text-[#160e41]">Revolutionizing Memorial Services with <br /> <span className="text-[#04784a]">Live TV Broadcasts</span></h2>
            <p className="mt-3 text-[20px] text-gray-500">Partner with us to broadcast a loved one’s legacy, reaching hearts beyond just those present.</p>
          </div>

          <div className="grid md:grid-cols-2 items-center gap-20">
            <div>
              <div>
                <h2 className="text-2xl md:text-4xl font-[rec] font-[900] text-[#160e41]">A new dimension to honoring loved ones</h2>
                <p className="mt-3 text-[18px] text-gray-500">Our exclusive partnership with local TV stations introduces a new dimension to honoring loved ones. By airing listings and memorial tributes live and online, we offer a modern alternative to outdated obituaries, bringing communities together in celebration and remembrance.</p>

                <div className="mt-11">
                  <Button
                    href="/"
                    preset="primary"
                    text="Get In Touch"
                    size="wide"
                  />
                </div>
              </div>

            </div>
            <div>
              <div>
                <iframe src="https://player.vimeo.com/video/956586066?app_id=122963&referrer=https%3A%2F%2Fwww.chptr.com%2F" className="w-[100%] h-[240px] md:h-[500px] rounded-[10px]"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[80px]">
        <div className="lg:container m-auto px-2">
          <div className="text-center pb-11">
            <h2 className="text-5xl font-[rec] font-[900] text-[#160e41] capitalize">Word on the Street</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-5 pt-6">

            <div className="glossy-card">
              <Image src={require('./assets/quote.svg')} width={70} height={70} alt="" />

              <p className="mt-5 text-[16px] text-gray-500">“Chptr has not only changed the way I plan events but has lessened the burden of planning events for 700+ people and also being a college student! Chptr is a company that has shown success in consistent communication with Greek Life members and always has a creative new idea. Chptr can guide me, advise me and they understand what I am doing but above all else the team desires to create a personal connection with me. The team is ambitious, dependable and intentional. I couldn’t have had such a huge success with all my events this past semester without Chptr. This company is going to do amazing things and I encourage every greek life chapter to partner with Chptr!”</p>

              <div className="flex gap-4 items-center mt-8">
                <div className="leading-[19px]">
                  <p className="text-[16px] font-[rec] font-[900] text-[#04784a]">VP OF EVENT PLANNING, AGD</p>
                </div>
              </div>
            </div>

            <div className="glossy-card">
              <Image src={require('./assets/quote.svg')} width={70} height={70} alt="" />

              <p className="mt-5 text-[16px] text-gray-500">“If I were to tell another recruitment chair about Chptr, the first thing I would say is USE THEM! Chptr has checked all the boxes for me when connecting with vendors and planning events. My experience so far with Chptr has been amazing! Chptr has been an encouraging and positive resource for me while planning a recruitment. Having them as a source for contacting vendors in Auburn has been such a blessing! I have loved everyone I have worked with at Chptr and have been so impressed by their dedication and desire to help me plan the best recruitment possible!”</p>

              <div className="flex gap-4 items-center mt-8">
                <div className="leading-[17px]">
                  <p className="text-[16px] font-[rec] text-[#04784a] font-[900]">RECRUITMENT CHAIR,  AGD</p>
                </div>
              </div>
            </div>

            <div className="glossy-card">
              <Image src={require('./assets/quote.svg')} width={70} height={70} alt="" />

              <p className="mt-5 text-[16px] text-gray-500">“Chptr has been a great resource for our executive board and members. Everything you could want is in one place. Chptr has allowed me oversee all different positions and parts of the sorority in an easier way. I am able to check on attendance, excuses, Panhellenic points, social and sisterhood events, and invoices all at once. We have seen better communication and organization since working with Chptr. My experience has been nothing short of amazing as I have watched this app and organization grow. It has taken lots of stress away from the job while still allowing me to be actively apart of every aspect.”</p>

              <div className="flex gap-4 items-center mt-8">
                <div className="leading-[17px]">
                  <p className="text-[16px] font-[rec] text-[#04784a] font-[900]">PRESIDENT, PHI MU</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="bg-[#fff]">
          <div className="lg:container m-auto py-5 px-2">
            <div className="py-11 grid grid-cols-2 md:grid-cols-4 gap-11">
              <div>
                <Image
                  width={125}
                  height={125}
                  alt="logo"
                  src='https://www.chptr.house/img/chptr-logo-green.png'
                />

                <a href="https://apps.apple.com/app/autarc/id6464311183" className="block pt-7 pb-3" >
                  <Image height={30} className="max-h-[55px] object-cover" src="https://cdn.prod.website-files.com/612ceb40385e587618b55ff1/62cc57fafeae6aca220c5b2e_Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" width="139" alt="" />
                </a>

                <a href="https://app.autarc.energy/login" className="w-inline-block" >
                  <Image className="max-h-[55px] object-cover" height={30} src="https://cdn.prod.website-files.com/612ceb40385e587618b55ff1/6522f629bc6595a760df6208_google-play-badge-logo.svg" width="139" alt="" />
                </a>
              </div>

              <div>
              </div>

              <div>

                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Our Story</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Our Team</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  What We Do</Link>

                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Become A Vendor
                </Link>

              </div>

              <div>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Privacy</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Contact Us</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Support</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f0f5fc]">
          <div className="lg:container m-auto py-4 px-2">
            <p className="text-[#bab4dd] text-[12px] font-[500]">© chptr Social Management | All right reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
