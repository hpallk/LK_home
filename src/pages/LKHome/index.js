import React from "react";

import {
  Column,
  Row,
  Image,
  Text,
  Button,
  Stack,
  Line,
  List,
} from "components";

const LKHomePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-roboto items-center justify-end mx-[auto] lg:pt-[11px] pt-[13px] 2xl:pt-[14px] 3xl:pt-[17px] w-[100%]">
        <Column className="items-start justify-start lg:ml-[101px] ml-[115px] xl:ml-[116px] 2xl:ml-[131px] 3xl:ml-[157px] lg:mr-[105px] mr-[119px] xl:mr-[120px] 2xl:mr-[135px] 3xl:mr-[162px] w-[81%]">
          <Column className="items-center w-[100%]">
            <Row className="items-start justify-start w-[100%]">
              <Image
                src={"images/img_lklogo1.png"}
                className="lg:h-[32px] h-[36px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] object-contain w-[14%]"
                alt="LKLogo1"
              />
              <Row className="items-center justify-center mb-[1px] lg:ml-[365px] ml-[412px] xl:ml-[417px] 2xl:ml-[470px] 3xl:ml-[564px] lg:mt-[2px] mt-[3px] 3xl:mt-[4px] w-[42%]">
                <Text className="font-normal 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] my-[9px] not-italic lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Home
                </Text>
                <Text className="font-normal lg:ml-[23px] ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] my-[9px] not-italic lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Deals
                </Text>
                <Text className="font-normal lg:ml-[23px] ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] my-[9px] not-italic lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Pricing
                </Text>
                <Text className="font-normal lg:ml-[23px] ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] my-[9px] not-italic lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Features
                </Text>
                <Text className="font-normal lg:ml-[22px] ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] my-[9px] not-italic lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Blog
                </Text>
                <Text className="font-normal lg:ml-[23px] ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] my-[9px] not-italic lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                  Login
                </Text>
                <Button className="bg-gray_900 font-normal lg:ml-[20px] ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] not-italic 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] py-[9px] rounded-radius10 lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center text-white_A700 w-[18%]">
                  Sign Up
                </Button>
              </Row>
              <Image
                src={"images/img_bag.png"}
                className="lg:h-[22px] h-[24px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[14px] ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[6px] mt-[7px] 3xl:mt-[9px] object-contain lg:w-[21px] w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                alt="Bag"
              />
            </Row>
            <Row className="items-start justify-between lg:ml-[2px] ml-[3px] 3xl:ml-[4px] lg:mr-[21px] mr-[24px] 2xl:mr-[27px] 3xl:mr-[32px] 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[86px] mt-[97px] xl:mt-[98px] w-[97%]">
              <Column className="items-start justify-start lg:mb-[52px] mb-[59px] 2xl:mb-[67px] 3xl:mb-[80px] lg:mt-[37px] mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[41%]">
                <Column className="items-center w-[100%]">
                  <Text className="font-normal leading-[normal] not-italic lg:text-[35px] text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-black_900 text-left w-[100%]">
                    Go From Planning to Execution
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[19px] mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 text-left w-[100%]">
                    You don’t always need to hire employees to create or scale
                    the next generation tech solutions. LaunchKit enables you to
                    find just the right next step to progress based on your
                    Startup stage. Save thousands of dolllars on the leading
                    platforms cost with our Startup Deals.
                  </Text>
                </Column>
                <Row className="items-center justify-start lg:mt-[24px] mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] w-[78%]">
                  <Button className="bg-gray_900 font-bold lg:py-[11px] py-[13px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius10 lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-center text-white_A700 w-[47%]">
                    Sign Up for Free
                  </Button>
                  <Button className="border border-gray_900 border-solid font-normal lg:ml-[18px] ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] not-italic lg:py-[13px] py-[15px] 2xl:py-[17px] 3xl:py-[20px] rounded-radius10 lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center text-gray_900 w-[47%]">
                    Claim Perks
                  </Button>
                </Row>
              </Column>
              <Image
                src={"images/img_bannerimage.png"}
                className="lg:h-[337px] h-[380px] xl:h-[386px] 2xl:h-[434px] 3xl:h-[521px] object-contain w-[43%]"
                alt="BannerImage"
              />
            </Row>
            <Text className="font-normal lg:ml-[199px] ml-[225px] xl:ml-[228px] 2xl:ml-[256px] 3xl:ml-[308px] lg:mr-[196px] mr-[222px] xl:mr-[225px] 2xl:mr-[253px] 3xl:mr-[303px] lg:mt-[105px] mt-[119px] xl:mt-[120px] 2xl:mt-[135px] 3xl:mt-[162px] not-italic lg:text-[35px] text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-black_900 w-[auto]">
              Redefining Product Development
            </Text>
            <Text className="font-normal leading-[normal] lg:ml-[248px] ml-[280px] xl:ml-[283px] 2xl:ml-[319px] 3xl:ml-[383px] lg:mr-[245px] mr-[277px] xl:mr-[280px] 2xl:mr-[316px] 3xl:mr-[379px] lg:mt-[15px] mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 text-center w-[46%]">
              All you need is the right direction to create a world class
              product. We enable you with the right knowledge to get started.
            </Text>
            <Row className="items-center justify-start lg:ml-[103px] ml-[117px] xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[160px] 2xl:mr-[106px] 3xl:mr-[127px] lg:mr-[82px] mr-[93px] xl:mr-[94px] lg:mt-[113px] mt-[128px] xl:mt-[129px] 2xl:mt-[146px] 3xl:mt-[175px] w-[80%]">
              <Image
                src={"images/img_section1image.png"}
                className="lg:h-[249px] h-[280px] xl:h-[284px] 2xl:h-[320px] 3xl:h-[384px] object-contain w-[46%]"
                alt="Section1Image"
              />
              <Column className="items-start lg:mb-[62px] mb-[71px] xl:mb-[72px] 2xl:mb-[81px] 3xl:mb-[97px] lg:ml-[62px] ml-[71px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] 3xl:mt-[109px] lg:mt-[70px] mt-[80px] xl:mt-[81px] 2xl:mt-[91px] w-[45%]">
                <Text className="font-normal not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-green_A700 w-[auto]">
                  INTUITIVE
                </Text>
                <Text className="font-normal lg:mt-[6px] mt-[7px] 3xl:mt-[9px] not-italic lg:text-[26px] text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 w-[auto]">
                  Unlimited consultations
                </Text>
                <Column className="items-center lg:mt-[13px] mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                  <Text className="font-normal leading-[normal] not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 text-left w-[100%]">
                    Premium users get unlimited consultations with Tech Industry
                    Experts with proven track record to find the right solutions
                    for thieir unique requirements.
                  </Text>
                </Column>
              </Column>
            </Row>
            <Row className="items-start justify-between lg:ml-[103px] ml-[117px] xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[160px] lg:mr-[125px] mr-[141px] xl:mr-[143px] 2xl:mr-[160px] 3xl:mr-[193px] lg:mt-[115px] mt-[130px] xl:mt-[131px] 2xl:mt-[148px] 3xl:mt-[177px] w-[75%]">
              <Column className="items-start justify-start lg:mb-[36px] mb-[41px] 2xl:mb-[46px] 3xl:mb-[56px] lg:mt-[48px] mt-[55px] 2xl:mt-[62px] 3xl:mt-[75px] w-[48%]">
                <Text className="font-normal not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-green_A700 w-[auto]">
                  STARTUP DEALS
                </Text>
                <Column className="items-center lg:mt-[6px] mt-[7px] 3xl:mt-[9px] w-[100%]">
                  <Text className="font-normal leading-[normal] not-italic lg:text-[26px] text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 text-left w-[100%]">
                    Get your money back with perks worth $100K+
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[13px] mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 text-left w-[100%]">
                    From AWS Activate, Stripe to Zendesk, we partner with top
                    digital platform providers to offer our Premium users
                    special credits & discounts.
                  </Text>
                </Column>
              </Column>
              <Column className="items-start justify-start w-[35%]">
                <Row className="items-start justify-start w-[94%]">
                  <Image
                    src={"images/img_p49ujxdbaurplyc.png"}
                    className="lg:h-[20px] h-[22px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] mb-[11px] 2xl:mb-[12px] 3xl:mb-[15px] lg:mb-[9px] lg:mt-[30px] mt-[34px] 2xl:mt-[38px] 3xl:mt-[46px] object-contain w-[25%]"
                    alt="p49ujxdbaurplyc"
                  />
                  <Column className="items-start justify-start lg:ml-[15px] ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] w-[67%]">
                    <Column className="items-center w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Image
                          src={"images/img_5f63bb983845ab9.png"}
                          className="lg:h-[24px] h-[27px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] mb-[9px] object-contain w-[44%]"
                          alt="5f63bb983845ab9"
                        />
                        <Image
                          src={"images/img_1200pxmixpanel.png"}
                          className="lg:h-[20px] h-[22px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:mt-[11px] mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] object-contain w-[40%]"
                          alt="1200pxMixpanel"
                        />
                      </Row>
                    </Column>
                    <Image
                      src={"images/img_h3eovdtaorq6syp.png"}
                      className="lg:h-[20px] h-[22px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[6px] ml-[7px] 3xl:ml-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] mt-[9px] object-contain w-[62%]"
                      alt="h3eoVdTaoRQ6syP"
                    />
                  </Column>
                </Row>
                <Column className="items-center lg:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Image
                      src={"images/img_aws1.png"}
                      className="lg:h-[20px] h-[22px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain w-[48%]"
                      alt="aws1"
                    />
                    <Image
                      src={"images/img_twiliosegment.png"}
                      className="lg:h-[20px] h-[22px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:mb-[4px] mb-[5px] 3xl:mb-[6px] object-contain w-[37%]"
                      alt="TwilioSegment"
                    />
                  </Row>
                </Column>
                <Column className="items-end lg:mt-[2px] mt-[3px] 3xl:mt-[4px] pr-[11px] 2xl:pr-[12px] 3xl:pr-[15px] lg:pr-[9px] w-[100%]">
                  <Stack className="lg:h-[138px] h-[155px] xl:h-[158px] 2xl:h-[177px] 3xl:h-[213px] w-[80%]">
                    <Stack className="absolute 2xl:h-[104px] 3xl:h-[125px] lg:h-[81px] h-[91px] xl:h-[93px] left-[13%] w-[46%]">
                      <Row className="absolute h-[max-content] inset-y-[0] items-start justify-between my-[auto] w-[74%]">
                        <Image
                          src={"images/img_vector.png"}
                          className="lg:h-[61px] h-[68px] xl:h-[69px] 2xl:h-[78px] 3xl:h-[94px] lg:mb-[14px] mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] object-contain w-[35%]"
                          alt="Vector"
                        />
                        <Image
                          src={"images/img_vector_1.png"}
                          className="lg:h-[16px] h-[17px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] lg:mt-[59px] mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] object-contain w-[54%]"
                          alt="Vector"
                        />
                      </Row>
                      <Column
                        className="absolute bg-cover bg-repeat justify-start lg:pb-[52px] pb-[59px] 2xl:pb-[67px] 3xl:pb-[80px] 3xl:pr-[10px] lg:pr-[7px] pr-[8px] 2xl:pr-[9px] 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] pt-[9px] w-[91%]"
                        style={{
                          backgroundImage: "url('images/img_group3.png')",
                        }}
                      >
                        <Stack className="h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:mr-[17px] mr-[20px] 2xl:mr-[22px] 3xl:mr-[27px] w-[30%]">
                          <Image
                            src={"images/img_vector_2.png"}
                            className="absolute h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] inset-x-[0] mx-[auto] object-contain w-[79%]"
                            alt="Vector"
                          />
                          <Image
                            src={"images/img_vector_3.png"}
                            className="absolute h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] object-cover w-[100%]"
                            alt="Vector"
                          />
                        </Stack>
                        <div className="bg-bluegray_800 h-[1px] 3xl:h-[2px] 2xl:h-[2px] xl:h-[2px] lg:mt-[14px] mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[10%]"></div>
                      </Column>
                    </Stack>
                    <Column
                      className="absolute bg-cover bg-repeat lg:h-[28px] h-[31px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] items-center justify-start left-[31%] lg:p-[1px] p-[2px] top-[25%] lg:w-[27px] w-[31px] 2xl:w-[35px] 3xl:w-[42px]"
                      style={{
                        backgroundImage: "url('images/img_group4.png')",
                      }}
                    >
                      <Stack
                        className="bg-cover bg-repeat lg:h-[24px] h-[26px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] 3xl:px-[10px] lg:px-[7px] px-[8px] 2xl:px-[9px] lg:py-[4px] py-[5px] 3xl:py-[6px] lg:w-[23px] w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                        style={{
                          backgroundImage: "url('images/img_group5.png')",
                        }}
                      >
                        <Image
                          src={"images/img_vector_4.png"}
                          className="absolute lg:h-[15px] h-[16px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] object-contain w-[80%]"
                          alt="Vector"
                        />
                      </Stack>
                    </Column>
                    <Image
                      src={"images/img_vector_5.png"}
                      className="absolute lg:h-[18px] h-[20px] xl:h-[21px] 2xl:h-[23px] 3xl:h-[28px] left-[4%] object-contain top-[41%] w-[8%]"
                      alt="Vector"
                    />
                    <Image
                      src={"images/img_vector_6.png"}
                      className="absolute bottom-[23%] lg:h-[24px] h-[26px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] object-contain right-[37%] w-[5%]"
                      alt="Vector"
                    />
                    <Line className="absolute bg-bluegray_800 h-[1px] w-[81%]" />
                    <Image
                      src={"images/img_stripe1.png"}
                      className="absolute lg:h-[27px] h-[30px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] object-contain w-[53%]"
                      alt="Stripe1"
                    />
                    <Image
                      src={"images/img_asset15x.png"}
                      className="absolute lg:h-[24px] h-[27px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] left-[7%] object-contain top-[8%] w-[12%]"
                      alt="asset15x"
                    />
                  </Stack>
                </Column>
              </Column>
            </Row>
          </Column>
          <Column className="items-end mt-[107px] xl:mt-[108px] 2xl:mt-[122px] 3xl:mt-[146px] lg:mt-[94px] 2xl:pr-[106px] 3xl:pr-[127px] lg:pr-[82px] pr-[93px] xl:pr-[94px] w-[100%]">
            <Row className="items-start justify-end w-[80%]">
              <Image
                src={"images/img_section3image.png"}
                className="lg:h-[240px] h-[270px] xl:h-[274px] 2xl:h-[309px] 3xl:h-[370px] object-contain w-[33%]"
                alt="Section3Image"
              />
              <Column className="items-start justify-start 3xl:mb-[116px] lg:mb-[75px] mb-[85px] xl:mb-[86px] 2xl:mb-[96px] lg:ml-[120px] ml-[136px] xl:ml-[137px] 2xl:ml-[155px] 3xl:ml-[186px] lg:mt-[41px] mt-[47px] 2xl:mt-[53px] 3xl:mt-[64px] w-[49%]">
                <Text className="font-normal not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-green_A700 w-[auto]">
                  LIFETIME FREE
                </Text>
                <Column className="items-center lg:mt-[6px] mt-[7px] 3xl:mt-[9px] w-[100%]">
                  <Text className="font-normal leading-[normal] not-italic lg:text-[26px] text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 text-left w-[100%]">
                    We promise you a free access forever
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[6px] mt-[7px] 3xl:mt-[9px] not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 text-left w-[100%]">
                    All users get a lifetime access to our exclusive Startup and
                    Growth oriented content and events.
                  </Text>
                </Column>
              </Column>
            </Row>
          </Column>
          <Row className="items-start justify-start lg:ml-[103px] ml-[117px] xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[160px] 3xl:mt-[112px] lg:mt-[72px] mt-[82px] xl:mt-[83px] 2xl:mt-[93px] w-[71%]">
            <Column className="items-start justify-start lg:mb-[43px] mb-[49px] 2xl:mb-[55px] 3xl:mb-[67px] 3xl:mt-[102px] lg:mt-[66px] mt-[75px] xl:mt-[76px] 2xl:mt-[85px] w-[51%]">
              <Text className="font-normal not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-green_A700 w-[auto]">
                COMING SOON
              </Text>
              <Column className="items-center lg:mt-[6px] mt-[7px] 3xl:mt-[9px] w-[100%]">
                <Text className="font-normal leading-[normal] not-italic lg:text-[26px] text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-black_900 text-left w-[100%]">
                  Legal Agreements & Policies Generator
                </Text>
                <Text className="font-normal leading-[normal] lg:mt-[6px] mt-[7px] 3xl:mt-[9px] not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 text-left w-[100%]">
                  We are developing a state of the art agreements & policy
                  generator which will save you thousands of dollars on legal
                  cost.
                </Text>
              </Column>
            </Column>
            <Image
              src={"images/img_section4image.png"}
              className="lg:h-[249px] h-[280px] xl:h-[284px] 2xl:h-[320px] 3xl:h-[384px] lg:ml-[150px] ml-[170px] xl:ml-[172px] 2xl:ml-[193px] 3xl:ml-[232px] object-contain w-[26%]"
              alt="Section4Image"
            />
          </Row>
        </Column>
        <Column className="items-center justify-start lg:mt-[133px] mt-[150px] xl:mt-[152px] 2xl:mt-[171px] 3xl:mt-[205px] w-[100%]">
          <Column
            className="bg-cover bg-repeat items-center justify-start lg:pb-[137px] pb-[155px] xl:pb-[157px] 2xl:pb-[176px] 3xl:pb-[212px] lg:pl-[167px] pl-[189px] xl:pl-[191px] 2xl:pl-[215px] 3xl:pl-[258px] lg:pr-[168px] pr-[190px] xl:pr-[192px] 2xl:pr-[216px] 3xl:pr-[260px] lg:pt-[121px] pt-[137px] xl:pt-[138px] 2xl:pt-[156px] 3xl:pt-[187px] w-[100%]"
            style={{ backgroundImage: "url('images/img_testimonial.png')" }}
          >
            <Text className="font-normal mx-[auto] not-italic lg:text-[35px] text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-black_900 w-[auto]">
              Some Client Love!
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[15px] mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mx-[auto] not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 text-left w-[53%]">
              All you need is the right service to create a world class product.
              Get highly vetted service providers when you need them.
            </Text>
            <List
              className="lg:gap-[27px] gap-[31px] 2xl:gap-[35px] 3xl:gap-[42px] grid grid-cols-3 min-h-[auto] 2xl:mt-[111px] 3xl:mt-[134px] lg:mt-[86px] mt-[98px] xl:mt-[99px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 items-center justify-center lg:pb-[20px] pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] lg:pl-[22px] pl-[25px] 2xl:pl-[28px] 3xl:pl-[34px] lg:pr-[21px] pr-[24px] 2xl:pr-[27px] 3xl:pr-[32px] lg:pt-[23px] pt-[27px] 2xl:pt-[30px] 3xl:pt-[36px] rounded-radius10 w-[100%]">
                <Text className="font-normal leading-[normal] not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 text-left w-[100%]">
                  “We were looking to hire iOS and Android developers in our
                  country but struggling to scale the Tech Team, LaunchKit
                  helped us connect with the right supplier and it was super
                  smooth. On top of this, we got $5000 on AWS credits. Amazing!”
                </Text>
                <Row className="items-start justify-center lg:mt-[15px] mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mx-[auto] w-[78%]">
                  <Image
                    src={"images/img_image.png"}
                    className="lg:h-[45px] h-[50px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] object-contain rounded-radius50 w-[auto]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:mb-[3px] mb-[4px] 3xl:mb-[5px] lg:ml-[12px] ml-[14px] 2xl:ml-[15px] 3xl:ml-[19px] w-[63%]">
                    <Text className="font-normal not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 w-[auto]">
                      Emos Lee
                    </Text>
                    <Column className="items-center w-[100%]">
                      <Text className="font-normal not-italic lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        Co-Founder and CEO
                      </Text>
                    </Column>
                    <Text className="font-bold lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Amigo
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 items-center justify-center lg:pb-[20px] pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] lg:pl-[22px] pl-[25px] 2xl:pl-[28px] 3xl:pl-[34px] lg:pr-[21px] pr-[24px] 2xl:pr-[27px] 3xl:pr-[32px] lg:pt-[23px] pt-[27px] 2xl:pt-[30px] 3xl:pt-[36px] rounded-radius10 w-[100%]">
                <Text className="font-normal leading-[normal] not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 text-left w-[100%]">
                  “We were looking to hire iOS and Android developers in our
                  country but struggling to scale the Tech Team, LaunchKit
                  helped us connect with the right supplier and it was super
                  smooth. On top of this, we got $5000 on AWS credits. Amazing!”
                </Text>
                <Row className="items-start justify-center lg:mt-[15px] mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mx-[auto] w-[78%]">
                  <Image
                    src={"images/img_image_1.png"}
                    className="lg:h-[45px] h-[50px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] object-contain rounded-radius50 w-[auto]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:mb-[3px] mb-[4px] 3xl:mb-[5px] lg:ml-[12px] ml-[14px] 2xl:ml-[15px] 3xl:ml-[19px] w-[63%]">
                    <Text className="font-normal not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 w-[auto]">
                      Emos Lee
                    </Text>
                    <Column className="items-center w-[100%]">
                      <Text className="font-normal not-italic lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        Co-Founder and CEO
                      </Text>
                    </Column>
                    <Text className="font-bold lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Amigo
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 items-center justify-center lg:pb-[20px] pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] lg:pl-[22px] pl-[25px] 2xl:pl-[28px] 3xl:pl-[34px] lg:pr-[21px] pr-[24px] 2xl:pr-[27px] 3xl:pr-[32px] lg:pt-[23px] pt-[27px] 2xl:pt-[30px] 3xl:pt-[36px] rounded-radius10 w-[100%]">
                <Text className="font-normal leading-[normal] not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 text-left w-[100%]">
                  “We were looking to hire iOS and Android developers in our
                  country but struggling to scale the Tech Team, LaunchKit
                  helped us connect with the right supplier and it was super
                  smooth. On top of this, we got $5000 on AWS credits. Amazing!”
                </Text>
                <Row className="items-start justify-center lg:mt-[15px] mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mx-[auto] w-[78%]">
                  <Image
                    src={"images/img_image_2.png"}
                    className="lg:h-[45px] h-[50px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] object-contain rounded-radius50 w-[auto]"
                    alt="Image"
                  />
                  <Column className="items-start justify-start lg:mb-[3px] mb-[4px] 3xl:mb-[5px] lg:ml-[12px] ml-[14px] 2xl:ml-[15px] 3xl:ml-[19px] w-[63%]">
                    <Text className="font-normal not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 w-[auto]">
                      Emos Lee
                    </Text>
                    <Column className="items-center w-[100%]">
                      <Text className="font-normal not-italic lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                        Co-Founder and CEO
                      </Text>
                    </Column>
                    <Text className="font-bold lg:text-[10px] text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
                      Amigo
                    </Text>
                  </Column>
                </Row>
              </Column>
            </List>
          </Column>
          <Stack className="lg:h-[619px] h-[698px] xl:h-[708px] 2xl:h-[797px] 3xl:h-[956px] lg:mt-[187px] mt-[211px] xl:mt-[214px] 2xl:mt-[240px] 3xl:mt-[288px] w-[100%]">
            <div className="absolute bg-gray_900 lg:h-[515px] h-[580px] xl:h-[589px] 2xl:h-[662px] 3xl:h-[794px] w-[100%]"></div>
            <Row className="absolute bg-deep_purple_A100 inset-x-[0] items-center justify-start mx-[auto] 3xl:pb-[116px] lg:pb-[75px] pb-[85px] xl:pb-[86px] 2xl:pb-[96px] lg:pl-[38px] pl-[43px] 2xl:pl-[49px] 3xl:pl-[58px] lg:pt-[59px] pt-[67px] 2xl:pt-[76px] 3xl:pt-[91px] rounded-radius15 w-[83%]">
              <Column className="items-start w-[48%]">
                <Text className="font-normal not-italic lg:text-[35px] text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-white_A700 w-[auto]">
                  Take the first step
                </Text>
                <Column className="items-center 3xl:mt-[10px] lg:mt-[7px] mt-[8px] 2xl:mt-[9px] lg:pl-[1px] pl-[2px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-white_A700 w-[auto]">
                    Get started today & change the world for better
                  </Text>
                </Column>
              </Column>
              <Button className="bg-orange_400 font-bold lg:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[139px] ml-[157px] xl:ml-[159px] 2xl:ml-[179px] 3xl:ml-[214px] lg:mt-[20px] mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:py-[11px] py-[13px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius10 lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-black_900 text-center w-[15%]">
                Sign Up for Free
              </Button>
              <Button className="border border-orange_400 border-solid font-bold lg:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[18px] ml-[21px] 2xl:ml-[23px] 3xl:ml-[28px] lg:mt-[20px] mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:py-[11px] py-[13px] 2xl:py-[14px] 3xl:py-[17px] rounded-radius10 lg:text-[13px] text-[15px] 2xl:text-[17px] 3xl:text-[20px] text-center text-orange_400 w-[15%]">
                Claim Perks
              </Button>
            </Row>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default LKHomePage;
