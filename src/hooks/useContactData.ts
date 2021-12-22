import { graphql, useStaticQuery } from "gatsby"

interface ContactData {
  landline: string
  mobile: string
  email: string
  address: {
    companyName: string
    line1: string
    line2: string
    city: string
    postCounty: string
    postCode: string
  }
  facebook: string
  instagram: string
  twitter: string
}

const useContactData = (): ContactData => {
  const { contactsJson } = useStaticQuery<{
    contactsJson: ContactData
  }>(graphql`
    query {
      contactsJson {
        landline
        mobile
        email
        address {
          companyName
          line1
          line2
          city
          postCounty
          postCode
        }
        facebook
        instagram
        twitter
      }
    }
  `)
  return contactsJson
}

export default useContactData
