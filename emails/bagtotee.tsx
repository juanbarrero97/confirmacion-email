import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

    
  
  export const BagToTeeReceiptEmail = () => (
    <Html>
      <Head />
      <Preview>BagToTee Order Confirmation And Label</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={track.container}>
            <Row>
              <Column>
                <Text style={global.paragraphWithBold}>Tracking Number</Text>
                <Link href="https://app.bagtotee.com/#/Tracking/{Fields.Receipt_Order}">
                    <Text style={track.number}>{"{Fields.Receipt_Order}"}</Text>
                </Link>
              </Column>
              <Column align="right">
                <Link href="https://app.bagtotee.com/#/Tracking/{Fields.Receipt_Order}" style={global.button}>Track Shipment</Link>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={message}>
            <Img
              src={`http://localhost:3000/static/bagtoteelogo1.png`}
              width="66"
              height="22"
              alt="BagToTee"
              style={{ margin: 'auto' }}
            />
            <Heading style={global.heading}>Shipping Instructions</Heading>
            <Text style={{...global.text, ...instructions.ul}}>
              Continue with the following steps below:
            </Text>
            <Text style={{ ...global.text,...instructions.li, marginTop: 24 } as any}>
              1 - Print the shipping label PDF attached in this email.
              <br></br>
              2 - Attach it to the outside of the golf shipping bag: <Link href="https://www.bagtotee.com/learning/how-to-pack#post"> Packing Tips</Link>
              <br></br>
              3 - Drop off clubs at the carrier you selected (FedEx or UPS)
              <Link href="https://app.bagtotee.com/#/Store"> Locater</Link> 
              <br></br>
               or if you have ordered a pickup see instructions here: <Link href="https://www.bagtotee.com/learning/how-pickups-work#post">Instructions</Link>
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={adressTitle}>Shipping to: {`{Fields.Receiver_name}`}</Text>
            <Text style={{ ...global.text, fontSize: 14 }}>
            {`{Fields.Receiver_address}`}
            </Text>
          </Section>
          <Container style={container}>
        <Section>

          <Column align="center" style={tableCell}>
            <Text style={heading}>Order Details</Text>
          </Column>
        </Section>
        <Section>
          <Text style={cupomText}>
            <sup style={supStyle}></sup>
          </Text>
        </Section>
        <Section style={informationTable}>
          <Row style={informationTableRow}>
            <Column colSpan={2}>
            <Column style={informationTableColumn} colSpan={2}>
              <Text style={informationTableLabel}>FROM</Text>
              <Text style={informationTableValue}>{`{Fields.Sender_name}`}</Text>
              <Text style={informationTableValue}>{`{Fields.Sender_address}`}</Text>
              <Text style={informationTableValue}>{`{Fields.Sender_city} {Fields.Sender_state},{Fields.Sender_zip}`}</Text>
              <Text style={informationTableValue}>{`{Fields.Sender_phone}`}</Text>
              <Text style={informationTableValue}>{`{Fields.Sender_email}`}</Text>
            </Column>
            </Column>
            <Column style={informationTableColumn} colSpan={2}>
              <Text style={informationTableLabel}>TO</Text>
              <Text style={informationTableValue}>{`{Fields.Receiver_name}`}</Text>
              <Text style={informationTableValue}>{`{Fields.Receiver_address}`}</Text>
              <Text style={informationTableValue}>{`{Fields.Receiver_city} {Fields.Receiver_state},{Fields.Reciever_zip}`}</Text>
              <Text style={informationTableValue}>{`{Fields.Receiver_phone}`}</Text>
              <Text style={informationTableValue}>{`{Fields.Receiver_email}`}</Text>
            </Column>
          </Row>
        </Section>
        <Section style={productTitleTable}>
          <Text style={productsTitle}>Payment Details</Text>
        </Section>
        <Section>
          
          <Column style={{ paddingLeft: '22px' }}>
            <Text style={productTitle}>Transportation</Text>
          </Column>

          <Column style={productPriceWrapper} align="right">
            <Text style={productPrice}>{"${Fields.Rate_Order}"}</Text>
          </Column>
        </Section>
        <Section>
          <Column style={{ paddingLeft: '22px' }}>
            <Text style={productTitle}>Insured: {"${Fields.TotalInsurance_Order}"}</Text>
          </Column>

          <Column style={productPriceWrapper} align="right">
            <Text style={productPrice}>{"${Fields.Insurance_Order}"}</Text>
          </Column>
        </Section>
        <Section>
          <Column style={{ paddingLeft: '22px' }}>
            <Text style={productTitle}>Pickup Fee</Text>
          </Column>

          <Column style={productPriceWrapper} align="right">
            <Text style={productPrice}>$0</Text>
          </Column>
        </Section>
        <Section>
          <Column style={{ paddingLeft: '22px' }}>
            <Text style={productTitle}>Additional Costs</Text>
          </Column>

          <Column style={productPriceWrapper} align="right">
            <Text style={productPrice}>{"${Fields.TotalAdditionals}"}</Text>
          </Column>
        </Section>
        <Section>
          <Column style={{ paddingLeft: '22px' }}>
            <Text style={productTitle}>Discount: {"{Fields.Discount_Order}%"} </Text>
          </Column>

          <Column style={productPriceWrapper} align="right">
            <Text style={productPrice}>{"${Fields.TotalDiscount_Order}"}</Text>
          </Column>
        </Section>
        <Hr style={productPriceLine} />
        <Section align="right">
          <Column style={tableCell} align="right">
            <Text style={productPriceTotal}>Total</Text>
          </Column>
          <Column style={productPriceVerticalLine}></Column>
          <Column style={productPriceLargeWrapper}>
            <Text style={productPriceLarge}>{"${Fields.Total_Order}"}</Text>
          </Column>
        </Section>
        <Hr style={productPriceLineBottom} />
        <Section>
          <Column align="center" style={block}>
          </Column>
        </Section>
      </Container>
          <Section style={global.defaultPadding}>
            <Row>
              <Column align="center">
                <Link href="https://app.bagtotee.com/#/Tracking/{Fields.Receipt_Order}" style={global.button}>Track Status {`{fields.Receipt_Order}`}</Link>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={paddingY}>
            <Text style={global.heading}>Print Label Attached At End of Email</Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={menu.container}>
            <Text style={menu.title}>Get Help</Text>
            <Row style={menu.content}>
              <Column style={{ width: '33%' }} colSpan={1}>
                <Link href="https://www.bagtotee.com/learning/how-it-works#post" style={menu.text}>
                  How it Works
                </Link>
              </Column>
              <Column style={{ width: '33%' }} colSpan={1}>
                <Link href="https://www.bagtotee.com/learning/how-to-pack#post" style={menu.text}>
                  How to Pack
                </Link>
              </Column>
              <Column style={{ width: '33%' }} colSpan={1}>
                <Link href="https://app.bagtotee.com/#/Store" style={menu.text}>
                  Drop-off Locator
                </Link>
              </Column>
            </Row>
            <Row style={{ ...menu.content, paddingTop: '0' }}>
              <Column style={{ width: '33%' }} colSpan={1}>
                <Link href="https://app.bagtotee.com/#/Tracking" style={menu.text}>
                  Tracking
                </Link>
              </Column>
              <Column style={{ width: '66%' }} colSpan={2}>
                <Link href="https://app.bagtotee.com/" style={menu.text}>
                  New Quote
                </Link>
              </Column>
            </Row>
            <Hr style={global.hr} />
            <Row style={menu.tel}>
              <Column>
                <Row>
                  <Column>
                    <Link href="tel:+1 (850) 713-5098">
                    <Text style={{ ...menu.text, marginBottom: '0' }}>
                    +1 (850) 713-5098
                    </Text>
                    </Link>
                  </Column>
                </Row>
              </Column>
              <Column>
                <Text
                  style={{
                    ...menu.text,
                    marginBottom: '0',
                  }}
                >
                  9 pm - 6 pm EST
                </Text>
              </Column>
              <Column>
                <Link href="mailto:support@bagtotee.com">
                <Text
                  style={{
                    ...menu.text,
                    marginBottom: '0',
                  }}
                >
                  support@bagtotee.com
                </Text>
                </Link>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={paddingY}>
          <Link href="https://bagtotee.com/" style={black}>
            <Text style={global.heading}>BagToTee.com</Text>
          </Link>
          </Section>
          <Hr style={{ ...global.hr, marginTop: '12px' }} />
          <Section style={paddingY}>
            <Row style={footer.policy}>
            </Row>
            <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
              Please contact us if you have any questions. (If you reply to this
              email, we won't be able to see it.)
            </Text>
            <Text style={footer.text}>
              © 2023 7LOC LLC. All Rights Reserved.
            </Text>
            <Text style={footer.text}>
              1749 NE Miami Ct, Miami, FL 33132, USA.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default BagToTeeReceiptEmail;

  const black = {
    color: "black",
  }
  
  const paddingX = {
    paddingLeft: '40px',
    paddingRight: '40px',
  };
  
  const paddingY = {
    paddingTop: '22px',
    paddingBottom: '22px',
  };
  
  const paragraph = {
    margin: '0',
    lineHeight: '2',
  };
  
  const global = {
    paddingX,
    paddingY,
    defaultPadding: {
      ...paddingX,
      ...paddingY,
    },
    paragraphWithBold: { ...paragraph, fontWeight: 'bold' },
    heading: {
      fontSize: '32px',
      lineHeight: '1.3',
      fontWeight: '700',
      textAlign: 'center',
      letterSpacing: '-1px',
    } as React.CSSProperties,
    text: {
      ...paragraph,
      color: '#747474',
      fontWeight: '500',
    },
    button: {
      border: '1px solid #929292',
      fontSize: '16px',
      textDecoration: 'none',
      padding: '10px 0px',
      width: '220px',
      display: 'block',
      textAlign: 'center',
      fontWeight: 500,
      color: '#000',
    } as React.CSSProperties,
    hr: {
      borderColor: '#E5E5E5',
      margin: '0',
    },
  };
  
  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '10px auto',
    width: '600px',
    border: '1px solid #E5E5E5',
  };
  
  const track = {
    container: {
      padding: '22px 40px',
      backgroundColor: '#F7F7F7',
    },
    number: {
      margin: '12px 0 0 0',
      fontWeight: 500,
      lineHeight: '1.4',
      color: '#6F6F6F',
    },
  };
  
  const message = {
    padding: '40px 74px',
    textAlign: 'center',
  } as React.CSSProperties;
  
  const adressTitle = {
    ...paragraph,
    fontSize: '15px',
    fontWeight: 'bold',
  };
  
  const recomendationsText = {
    margin: '0',
    fontSize: '15px',
    lineHeight: '1',
    paddingLeft: '10px',
    paddingRight: '10px',
  };
  
  const recomendations = {
    container: {
      padding: '20px 0',
    },
    product: {
      verticalAlign: 'top',
      textAlign: 'left' as const,
      paddingLeft: '2px',
      paddingRight: '2px',
    },
    title: { ...recomendationsText, paddingTop: '12px', fontWeight: '500' },
    text: {
      ...recomendationsText,
      paddingTop: '4px',
      color: '#747474',
    },
  };
  
  const menu = {
    container: {
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '20px',
      backgroundColor: '#F7F7F7',
    },
    content: {
      ...paddingY,
      paddingLeft: '20px',
      paddingRight: '20px',
    },
    title: {
      paddingLeft: '20px',
      paddingRight: '20px',
      fontWeight: 'bold',
    },
    text: {
      fontSize: '13.5px',
      marginTop: 0,
      fontWeight: 500,
      color: '#000',
    },
    tel: {
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '32px',
      paddingBottom: '22px',
    },
  };
  
  const categories = {
    container: {
      width: '370px',
      margin: 'auto',
      paddingTop: '12px',
    },
    text: {
      fontWeight: '500',
      color: '#000',
    },
  };

  const instructions = {
    ul: {
      paddingLeft: '0',
      marginLeft: '0',
      listStyleType: 'none' // This will remove the default bullet points
    },
    li: {
      display: 'block',
      textAlign: 'left'
    }
  }
  
  
  const footer = {
    policy: {
      width: '166px',
      margin: 'auto',
    },
    text: {
      margin: '0',
      color: '#AFAFAF',
      fontSize: '13px',
      textAlign: 'center',
    } as React.CSSProperties,
  };


const resetText = {
    margin: '0',
    padding: '0',
    lineHeight: 1.4,
  };
  
  
  
  const tableCell = { display: 'table-cell' };
  
  const heading = {
    fontSize: '32px',
    fontWeight: '300',
    color: '#888888',
  };
  
  const cupomText = {
    textAlign: 'center' as const,
    margin: '36px 0 40px 0',
    fontSize: '14px',
    fontWeight: '500',
    color: '#111111',
  };
  
  const supStyle = {
    fontWeight: '300',
  };
  
  const informationTable = {
    borderCollapse: 'collapse' as const,
    borderSpacing: '0px',
    color: 'rgb(51,51,51)',
    backgroundColor: 'rgb(250,250,250)',
    borderRadius: '3px',
    fontSize: '12px',
  };
  
  const informationTableRow = {
    height: '46px',
  };
  
  const informationTableColumn = {
    paddingLeft: '20px',
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: '0px 1px 1px 0px',
    height: '44px',
  };
  
  const informationTableLabel = {
    ...resetText,
    color: 'rgb(102,102,102)',
    fontSize: '10px',
  };
  
  const informationTableValue = {
    fontSize: '12px',
    margin: '0',
    padding: '0',
    lineHeight: 1.4,
  };
  
  const productTitleTable = {
    ...informationTable,
    margin: '30px 0 15px 0',
    height: '24px',
  };
  
  const productsTitle = {
    background: '#fafafa',
    paddingLeft: '10px',
    fontSize: '14px',
    fontWeight: '500',
    margin: '0',
  };
  
  const productIcon = {
    margin: '0 0 0 20px',
    borderRadius: '14px',
    border: '1px solid rgba(128,128,128,0.2)',
  };
  
  const productTitle = { fontSize: '12px', fontWeight: '600', ...resetText };
  
  const productDescription = {
    fontSize: '12px',
    color: 'rgb(102,102,102)',
    ...resetText,
  };
  
  const productLink = {
    fontSize: '12px',
    color: 'rgb(0,112,201)',
    textDecoration: 'none',
  };
  
  const divisor = {
    marginLeft: '4px',
    marginRight: '4px',
    color: 'rgb(51,51,51)',
    fontWeight: 200,
  };
  
  const productPriceTotal = {
    margin: '0',
    color: 'rgb(102,102,102)',
    fontSize: '10px',
    fontWeight: '600',
    padding: '0px 30px 0px 0px',
    textAlign: 'right' as const,
  };
  
  const productPrice = {
    fontSize: '12px',
    fontWeight: '600',
    margin: '0',
  };
  
  const productPriceLarge = {
    margin: '0px 20px 0px 0px',
    fontSize: '16px',
    fontWeight: '600',
    whiteSpace: 'nowrap' as const,
    textAlign: 'right' as const,
  };
  
  const productPriceWrapper = {
    display: 'table-cell',
    padding: '0px 20px 0px 0px',
    width: '100px',
    verticalAlign: 'top',
  };
  
  const productPriceLine = { margin: '30px 0 0 0' };
  
  const productPriceVerticalLine = {
    height: '48px',
    borderLeft: '1px solid',
    borderColor: 'rgb(238,238,238)',
  };
  
  const productPriceLargeWrapper = { display: 'table-cell', width: '90px' };
  
  const productPriceLineBottom = { margin: '0 0 75px 0' };
  
  const block = { display: 'block' };
 
  