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
              src='https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6339884edcb06d6ae77fe900_autarc%20logo_black.svg'
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
                      Products
                      <FontAwesomeIcon icon={faChevronDown} color="rgba(88, 86, 214, 1)" width={13} />
                    </div>
                  </Link>
                </Dropdown>
              </li>
              <li>
                <Dropdown menu={{ items }}>
                  <Link href={''}>
                    <Space className="flex items-center gap-1 py-2">
                      Solution
                      <FontAwesomeIcon icon={faChevronDown} color="rgba(88, 86, 214, 1)" width={13} />
                    </Space>
                  </Link>
                </Dropdown>
              </li>
              <li>Customers</li>
              <li>
                <Dropdown menu={{ items }}>
                  <Link href={''}>
                    <Space className="flex items-center gap-1 py-2">
                      Knowledge
                      <FontAwesomeIcon icon={faChevronDown} color="rgba(88, 86, 214, 1)" width={13} />
                    </Space>
                  </Link>
                </Dropdown>
              </li>
              <li>
                <Dropdown menu={{ items }}>
                  <Link href={''}>
                    <Space className="flex items-center gap-1 py-2">
                      About Us
                      <FontAwesomeIcon icon={faChevronDown} color="rgba(88, 86, 214, 1)" width={13} />
                    </Space>
                  </Link>
                </Dropdown>
              </li>
              <li>Jobs</li>
              <li>Rates</li>

              <li className="gap-2 flex">
                <Button
                  href="/"
                  preset="secondary"
                  text="Login"
                />

                <Button
                  href="/"
                  preset="primary"
                  text="Book a Demo"
                />
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <section>
        <div className="lg:container m-auto px-2">
          <div className="flex h-[500px] md:h-[700px] items-center gap-[80px]">
            <div className="w-[100%] md:w-[45%]">
              <h1 className="text-3xl md:text-5xl font-[roc-wide] leading-[40px] md:leading-[60px]">
                autarc is a better way
                <span className="text-[#5856d6]"> to plan heat pumps</span>
              </h1>

              <p className="mt-11 font-[400] text-gray-500 text-xl">
                Discover the new standard for sales and planning of heat pumps. Heat load, hydraulic balancing (B) and funding application in just a few clicks.
              </p>

              <div className="mt-11 flex flex-wrap gap-4">
                <input type="text" className="border-[#5856d6] font-[500] text-[15px] border-[1px] h-[58px] rounded-full px-6 flex-grow"
                  placeholder="Business email address*"
                />
                <Button
                  text="Book a Demo"
                  preset="primary"
                  href="/"
                  size="xl"
                />
              </div>

              <div>
                <div className="flex flex-wrap gap-4 mt-3 items-center md:justify-around">
                  <p className="text-[10px] uppercase font-[600] text-gray-500 flex items-center gap-1">
                    <div className="text-[#5856d6]">
                      <CheckCircleOutlined />
                    </div>
                    14-day free trial</p>
                  <p className="text-[10px] uppercase font-[600] text-gray-500 flex items-center gap-1">
                    <div className="text-[#5856d6]">
                      <CheckCircleOutlined />
                    </div>
                    Set up in just 3 minutes</p>
                  <p className="text-[10px] uppercase font-[600] text-gray-500 flex items-center gap-1">
                    <div className="text-[#5856d6]">
                      <CheckCircleOutlined />
                    </div>
                    Can be canceled at any time</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block w-[65%]">
              <Image
                width={0}
                height={0}
                sizes="100%"
                className="w-[100%] h-[100%] object-contain"
                alt=""
                src={'https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/65749b313d2e56f36107c33e_autarc-home-screen-1-min-p-1600.png'}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[80px] md:mb-[130px]">
        <div className="">

          <Marquee className="justify-around overflow-x-scroll overflow-y-hidden py-11 gap-3">
            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] p-6 shadow-xl min-w-[130px] w-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6391e678268622418d2bfeb9_Vinci.png" alt="" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] p-6 shadow-xl  min-w-[130px] w-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6391e67829871fbe96bc762b_Daume.png" alt="" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] p-6 shadow-xl  min-w-[130px] w-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6491b38e65330789e606fe27_Theodor%20Bergmann%20Berlin.svg" alt="" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] p-6 shadow-xl  min-w-[130px] w-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6491b38fbf4bdd782aa5eac1_Vattenfall.svg" alt="" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] p-6 shadow-xl  min-w-[130px] w-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6491b38fbf4bdd782aa5eac1_Vattenfall.svg" alt="" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] p-6 shadow-xl  min-w-[130px] w-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6491b48810e117cbe394c07b_mf%20mercedoil%20gmbh%20berlin.svg" alt="" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] p-6 shadow-xl  min-w-[130px] w-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6491b488fd4ac778e955fc38_koster%20gmbh%20berlin%20heizung.svg" alt="" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] p-6 shadow-xl  min-w-[130px] w-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6491b488fd4ac778e955fc38_koster%20gmbh%20berlin%20heizung.svg" alt="" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] p-6 shadow-xl  min-w-[130px] w-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/646269795ed5193ea3b87531_hoermann-haustechnik%201.svg" alt="" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] p-6 shadow-xl  min-w-[130px] w-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/646269792dc26a20312e9008_logo_wagenergie_rgb-removebg-preview%201.svg" alt="" />
            </div>

            <div className="mr-7 flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] h-[130px] p-6 shadow-xl  min-w-[130px] w-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/66cffa26a6addc029265bd2f_nuuEnergy_logo.png" alt="" />
            </div>

          </Marquee>
        </div>
      </section>

      <section className="mb-[80px] lg:mb-[170px]">
        <div className="lg:container m-auto px-2">
          <div className="">
            <p className="text-[13px] mb-1 font-[600] uppercase text-[#5856d6]">Benefits</p>
            <h2 className="text-2xl md:text-4xl font-[roc-wide] text-[#160e41]">Why <span className="text-[#5856d6]">autarc?</span></h2>
          </div>

          <div className="px-4 pt-11 grid md:grid-cols-3 md:pt-[125px] gap-8">
            <div className="relative">
              <div className="absolute z-[-1] top-[-15px] left-[-15px]">
                <div className="h-[85px] w-[85px] text-[25px] bg-linear flex items-center justify-center rounded-full text-[#fff] shadow-xl shadow-[#5856d6]">

                </div>
              </div>

              <div className="glossy-card">
                <div className="mb-4">
                  <div className="h-[65px] w-[65px] text-[25px] bg-[#5856d6] flex items-center justify-center rounded-full text-[#fff] shadow-xl shadow-[#5856d6]/[0.5]">
                    <ClockCircleOutlined color="#fff" />
                  </div>
                </div>

                <h3 className="font-[roc-wide] text-[#160e41] text-2xl">The fastest way to data</h3>

                <p className="mt-2 text-gray-500">With autarc, you can quickly access via 600 relevant house data thanks to artificial intelligence. In just 10 minutes enter all necessary information, supplemented with pictures at the customer's site. This step can also be taken over by inexperienced colleagues.</p>
              </div>
            </div>

            <div className="md:mt-[-80px]">
              <div className="glossy-card relative">
                <div className="mb-4">
                  <div className="h-[65px] w-[65px] text-[25px] bg-[#5856d6] flex items-center justify-center rounded-full text-[#fff] shadow-xl shadow-[#5856d6]/[0.5]">
                    <FontAwesomeIcon icon={faShieldAlt} />
                  </div>
                </div>

                <h3 className="font-[roc-wide] text-[#160e41] text-2xl">Higher offer quality
                </h3>

                <p className="mt-2 text-gray-500">Through the data Does quality increase your offers by 90%. With precise and comprehensive information, you can offer tailor-made solutions. For you, this means: more successful deals And a quick contract processing.</p>
              </div>
            </div>

            <div className="glossy-card relative">
              <div className="mb-4">
                <div className="h-[65px] w-[65px] text-[25px] bg-[#5856d6] flex items-center justify-center rounded-full text-[#fff] shadow-xl shadow-[#5856d6]/[0.5]">
                  <LockOutlined />
                </div>
              </div>

              <h3 className="font-[roc-wide] text-[#160e41] text-2xl">No plant failures</h3>

              <p className="mt-2 text-gray-500">Wrongly dimensioned or timed heat pumps are a thing of the past. Our precise analysis enables a optimal system planning. The result is powerful, efficient heat pumps that are precisely tailored to the needs of your customers. For you, that means: fewer plant failures and therefore happier customers.</p>
            </div>


          </div>
        </div>
      </section>

      <section className="mb-[80px] md:mb-[150px]">
        <div className="lg:container m-auto px-2">
          <div className="">
            <p className="text-[13px] mb-1 font-[600] uppercase text-[#5856d6]">Solution</p>
            <h2 className="text-2xl md:text-4xl font-[roc-wide] text-[#160e41]">autarc has what you need. <br /> <span className="text-[#5856d6]">The most efficient planning and sales process.</span></h2>
          </div>

          <div className="flex gap-5 md:gap-20 mt-11">
            <div className="relative">
              <div className="absolute left-[50%] translate-x-[-50%] shadow bg-[#fafafa] w-[15px] h-[15px] border-[#5856d6] border-[4px] rounded-full"></div>
              <div className="h-[100%] w-[2px] bg-[#0505050f]"></div>

              <div className="absolute bottom-0 left-[50%] translate-x-[-50%] shadow bg-[#fafafa] w-[15px] h-[15px] border-[#5856d6]  border-[4px] rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-11 py-[80px] flex-grow">
              <div className="my-auto">
                <div className="self-start">
                  <p className="text-[13px] mb-1 font-[600] uppercase text-[#5856d6]">
                    Heat pump check and customer portal</p>
                  <h3 className="text-2xl uppercase font-[roc-wide] text-[#160e41]">Quick aptitude test, modern communication</h3>
                  <div className="h-[5px] w-[60px] border-b-[3px] border-[#5856d6]"></div>
                </div>

                <p className="mt-5 text-gray-500">
                  In few minutes Does your customer find out whether a heat pump is suitable for their home. He then gets access to your customer portal, the hub for all communication. From the initial assessment up to the final installation keep your customers up to date.
                </p>

                <div className="mt-5">
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
                </div>
              </div>
              <div>
                <Image
                  width={0}
                  height={0}
                  className="w-[100%]"
                  sizes="100%"
                  alt=""
                  src={'https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/65749b3162da9b852b633038_autarc-home-screen-2-min.png'}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5 md:gap-20">
            <div className="relative">
              <div className="h-[100%] w-[2px] bg-[#0505050f]"></div>
              <div className="absolute bottom-0 left-[50%] translate-x-[-50%] shadow bg-[#fafafa] w-[15px] h-[15px] border-[#5856d6]  border-[4px] rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-11 py-[80px]">
              <div>
                <Image
                  width={0}
                  height={0}
                  className="w-[100%]"
                  sizes="100%"
                  alt=""
                  src={'https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/65749b3163cd25a8d73ccae9_autarc-home-screen-3-min.png'}
                />
              </div>

              <div className="my-auto">
                <div className="self-start">
                  <p className="text-[13px] mb-1 font-[600] uppercase text-[#5856d6]">
                    On-site visit</p>
                  <h3 className="text-2xl uppercase font-[roc-wide] text-[#160e41]">Input and calculation in one step</h3>
                  <div className="h-[5px] w-[60px] border-b-[3px] border-[#5856d6]"></div>
                </div>

                <p className="mt-5 text-gray-500">
                  In just 15 minutes Do you get a result for Heat load, sound emissions, heating surface design and hydraulic balancing (B). In addition, a suitable offer is generated. Means for you: less time for data recording, more time to sell the plant.
                </p>

                <div className="mt-5">
                  <ul>
                    <li className="flex item-center gap-2 mb-3">
                      <div className="scale-[0.8] bg-[#5856d6]/[0.3] text-white w-[25px] h-[25px] p-1 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} size='xs' color="#5856d6" />
                      </div>
                      <p className="text-[14px] text-gray-500">Mobile availability on tablet/smartphone</p>
                    </li>

                    <li className="flex item-center gap-2 mb-3">
                      <div className="scale-[0.8] bg-[#5856d6]/[0.3] text-white w-[25px] h-[25px] p-1 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} size='xs' color="#5856d6" />
                      </div>
                      <p className="text-[14px] text-gray-500">Room capture with 3D scanner</p>
                    </li>

                    <li className="flex item-center gap-2 mb-3">
                      <div className="scale-[0.8] bg-[#5856d6]/[0.3] text-white w-[25px] h-[25px] p-1 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} size='xs' color="#5856d6" />
                      </div>
                      <p className="text-[14px] text-gray-500">Automatic radiator detection (beta)</p>
                    </li>

                    <li className="flex item-center gap-2">
                      <div className="scale-[0.8] bg-[#5856d6]/[0.3] text-white w-[25px] h-[25px] p-1 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} size='xs' color="#5856d6" />
                      </div>
                      <p className="text-[14px] text-gray-500">All calculations in one pdf. Report</p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <div className="flex gap-5 md:gap-20">
            <div className="relative">
              <div className="h-[100%] w-[2px] bg-[#0505050f]"></div>
              <div className="absolute bottom-0 left-[50%] translate-x-[-50%] shadow bg-[#fafafa] w-[15px] h-[15px] border-[#5856d6]  border-[4px] rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-11 py-[80px]">
              <div className="my-auto">
                <div className="self-start">
                  <p className="text-[13px] mb-1 font-[600] uppercase text-[#5856d6]">Specialist partner portal</p>
                  <h3 className="text-2xl uppercase font-[roc-wide] text-[#160e41]">One software for everything related to the heat pump</h3>
                  <div className="h-[5px] w-[60px] border-b-[3px] border-[#5856d6]"></div>
                </div>

                <p className="mt-5 text-gray-500">
                  Everything is managed centrally in the specialist partner portal. It allows the generation of Reports, processing of Funding, the creation of VDZ forms, the startup of plants and maintenancies.
                </p>

                <div className="mt-5">
                  <ul>
                    <li className="flex item-center gap-2 mb-3">
                      <div className="scale-[0.8] bg-[#5856d6]/[0.3] text-white w-[25px] h-[25px] p-1 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} size='xs' color="#5856d6" />
                      </div>
                      <p className="text-[14px] text-gray-500">Collaborate with teammates</p>
                    </li>

                    <li className="flex item-center gap-2 mb-3">
                      <div className="scale-[0.8] bg-[#5856d6]/[0.3] text-white w-[25px] h-[25px] p-1 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} size='xs' color="#5856d6" />
                      </div>
                      <p className="text-[14px] text-gray-500">Generating heat pump reports</p>
                    </li>

                    <li className="flex item-center gap-2 mb-3">
                      <div className="scale-[0.8] bg-[#5856d6]/[0.3] text-white w-[25px] h-[25px] p-1 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} size='xs' color="#5856d6" />
                      </div>
                      <p className="text-[14px] text-gray-500">Planning of systems including heating surfaces</p>
                    </li>

                    <li className="flex item-center gap-2">
                      <div className="scale-[0.8] bg-[#5856d6]/[0.3] text-white w-[25px] h-[25px] p-1 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon icon={faCheck} size='xs' color="#5856d6" />
                      </div>
                      <p className="text-[14px] text-gray-500">Funding and VDZ forms</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Image
                  width={0}
                  height={0}
                  className="w-[100%]"
                  sizes="100%"
                  alt=""
                  src={'https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/65749b314ee49de84aad0baa_autarc-home-screen-4-min.png'}
                />
              </div>
            </div>
          </div>



        </div>
      </section>

      <section className="mb-[80px] md:my-[140px]">
        <div className="lg:container m-auto px-2">

          <div className="text-center">
            <h2 className="text-4xl font-[roc-wide] text-[#160e41]">Our software works with all manufacturers.</h2>
          </div>

          <div className="flex flex-wrap justify-center py-11 gap-5">
            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] min-h-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/643a79d582485650889931f1_Danfoss.svg" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] min-h-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/643a79d54eaafc68f6aa619c_IMI%20Heimeier.svg" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] min-h-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/643a79d5fb6ee1d0f1b04b25_Oventrop.svg" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] min-h-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/64628132380e5ecaac062cd8_Resideo%20Honeywell.svg" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] min-h-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6491b66ad7095943cebd8e6f_Viessmann.svg" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] min-h-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6491b65c8695df776be3aa90_Vaillant.svg" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] min-h-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6491b65c121acb6a85783b4a_Stiebel%20Eltron.svg" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] min-h-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6491b65cfc6d39159e072dac_Samsung.svg" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] min-h-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6491b65cfc6d39159e072da0_Buderus.svg" alt="" />
            </div>

            <div className="flex items-center justify-center shadow-[#000]/[0.05] bg-[#fff] p-6 shadow-xl min-w-[130px] w-[130px] h-[130px] min-h-[130px] rounded-full">
              <img src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6491b65c4793c63f2747af30_Daikin.svg" alt="" />
            </div>

          </div>
        </div>
      </section>

      <section className="mb-[80px] md:mb-[150px]">
        <div className="lg:container m-auto px-2">
          <div className="text-center pb-11">
            <h2 className="text-4xl font-[roc-wide] text-[#160e41]">What our customers are saying:</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-9 md:gap-5 pt-6">

            <div className="glossy-card">
              <Image src={require('./assets/quote.svg')} width={70} height={70} alt="" />

              <p className="mt-5">“Since we've been using autarc, we've been driving We no longer go directly to every customer. Through the Qualification During the heat pump check, we only deal with customers who are really interested in a heat pump.”</p>

              <div className="flex gap-4 items-center mt-8">
                <img className="w-[60px] h-[60px] rounded-full border-[2px] border-[#5856d6]" src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6569c64166880e76db5e38ca_Ellipse%20392.svg" alt="" />

                <div className="leading-[19px]">
                  <p className="font-[500]">Philip Walter</p>
                  <p className="text-[#30394e80] text-[13px] leading-[14px]">Managing Director at Thomas Mehner Haustechnik</p>
                </div>
              </div>
            </div>

            <div className="glossy-card">
              <Image src={require('./assets/quote.svg')} width={70} height={70} alt="" />

              <p className="mt-5">“With autarc, we can implement method B in Create under 1 hour, much faster than our previous solutions. We can see that our customers are impressed that everything comes from a single source.”</p>

              <div className="flex gap-4 items-center mt-8">
                <img className="w-[60px] h-[60px] rounded-full border-[2px] border-[#5856d6]" src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6569ff3c2615a40b667d1a1d_Group%20482130.svg" alt="" />

                <div className="leading-[17px]">
                  <p className="font-[500]">Stefan Möllenhoff</p>
                  <p className="text-[#30394e80] text-[13px]">Executive at Vinci Energies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-[80px] md:mb-[150px]">
        <div className="lg:container m-auto px-2">
          <div className="mb-9">
            <p className="text-[13px] mb-1 font-[600] uppercase text-[#5856d6]">Testimonials</p>
            <h2 className="text-2xl md:text-4xl font-[roc-wide] text-[#160e41]">What our customers say. <br /> <span className="text-[#5856d6]">How Daume plans 270 heat pumps per year using Autarc.</span></h2>
          </div>

          <div>
            <iframe src="https://www.youtube.com/embed/mEkOYnmscdw?rel=0&controls=1&autoplay=1&mute=1&start=0" className="w-[100%] h-[240px] md:h-[600px] rounded-[10px]"></iframe>
          </div>
        </div>
      </section>

      <section className="mb-[80px] md:mb-[150px]">
        <div className="lg:container m-auto">
          <div className="grid md:grid-cols-2 gap-11">
            <div className="md:w-[80%] my-auto px-2">
              <h4 className="font-[500] font-[roc-wide] text-3xl">Would you like to stay up to date?</h4>
              <p className="mb-4">Sign up for our newsletter</p>

              <input type="text" className="border-[#5856d6] w-[100%] mb-3 font-[500] text-[14px] border-[1px] h-[45px] rounded-full px-6 flex-grow" placeholder="First name*" />
              <input type="text" className="border-[#5856d6] w-[100%] mb-3 font-[500] text-[14px] border-[1px] h-[45px] rounded-full px-6 flex-grow" placeholder="Last name*" />
              <input type="text" className="border-[#5856d6] w-[100%] mb-6 font-[500] text-[14px] border-[1px] h-[45px] rounded-full px-6 flex-grow" placeholder="Business email address*" />

              <Button
                href="/"
                size="wide"
                preset="primary"
                text='Subscribe'
              />
            </div>
            <div className="bg-linear p-10">
              <h4 className="font-[500] font-[roc-wide] text-3xl text-white">Frequently asked questions</h4>
              <p className="text-[#fff]/[0.8]">We can help answer questions and resolve issues. Have a look at our frequently asked questions, send us a message or give us a call.</p>

              <div className="mt-7">
                <Button
                  href="/"
                  color="white"
                  preset="secondary"
                  text='Learn More'
                />
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
                  src='https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/6339884edcb06d6ae77fe900_autarc%20logo_black.svg'
                />

                <a href="https://apps.apple.com/app/autarc/id6464311183" className="block pt-7 pb-3" >
                  <Image height={30} src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/656a05f75545a6a3e2b24fab_Group%20482167.svg" width="169" alt="" />
                </a>

                <a href="https://app.autarc.energy/login" className="w-inline-block" >
                  <Image height={30} src="https://cdn.prod.website-files.com/62ed3f380e99ef9567e1d072/656a05f7d8a01b8c1b94e2a4_Group%20482166.svg" width="169" alt="" />
                </a>

                <div className="mt-8">
                  <Button
                    href="/demo"
                    preset="primary"
                    text="Request Demo"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-[16px] font-[500] text-[#30394e] mb-2">Products</h4>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Heat pump check
                </Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Customer portal</Link>

                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Quotation tool</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  LiDAR scan</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Heat load calculation</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Hydraulic balancing</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Heating surface design</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Funding service</Link>
              </div>

              <div>
                <h4 className="text-[16px] font-[500] text-[#30394e] mb-2">More Products</h4>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  For young companies</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  For established companies</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Hydraulic balancing</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Heating surface design</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Funding service</Link>
              </div>

              <div>
                <h4 className="text-[16px] font-[500] text-[#30394e] mb-2">Resources</h4>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Book a demo</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Customers</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Support</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Heating surface design</Link>
                <Link href='#' className="font-[400] text-[#30394e] text-[14px] mb-3 block flex items-center gap-2">
                  <Image src={require('./assets/arrow.svg')} alt="" width={15} height={15} />
                  Funding service</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f0f5fc]">
          <div className="lg:container m-auto py-4 px-2">
            <p className="text-[#bab4dd] text-[12px] font-[500]">autarc GmbH © 2024.
              All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
