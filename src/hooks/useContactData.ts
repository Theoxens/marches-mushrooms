import { graphql, useStaticQuery } from "gatsby"

interface ContactData {
  landline: string | undefined
  mobile: string | undefined
  email: string | undefined
  address:
    | {
        companyName: string | undefined
        line1: string | undefined
        line2: string | undefined
        city: string | undefined
        postCounty: string | undefined
        postCode: string | undefined
      }
    | undefined
  facebook: string | undefined
  instagram: string | undefined
  twitter: string | undefined
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
