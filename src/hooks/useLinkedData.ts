import useSiteMetadata from "./useSiteMetadata"
import useContactData from "./useContactData"
import ldIcon from "@icons/MM-ld-icon.png"
import siteImage from "@images/siteImage/marches-mushrooms.jpg"

interface LinkedData {
  business?: any
  website?: any
  page?: any
  breadcrumb?: any
}

interface LinkedDataProps {
  pageName?: string
  metaDescription?: string
  crumbs?: { name: string; path?: string }[]
}

const useLinkedData = (c: (keyof LinkedData)[], props: LinkedDataProps) => {
  const linkedData = {} as LinkedData
  const {
    siteUrl,
    description: siteDescription,
    companyName,
    altCompanyName,
  } = useSiteMetadata()
  const contacts = useContactData()
  const { address, landline, mobile, email } = contacts

  c.forEach(t => {
    switch (t) {
      case "business":
        linkedData.business = {
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "@id": siteUrl,
          name: companyName,
          alternateName: altCompanyName,
          url: siteUrl,
          logo: ldIcon,
          image: siteImage,
          description: siteDescription,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${address?.line1}, ${address?.line2}`,
            addressLocality: address?.city,
            addressRegion: address?.postCounty,
            postalCode: address?.postCode,
            addressCountry: "UK",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: landline || mobile,
            email,
          },
        }
        break

      case "website":
        linkedData.website = {
          "@context": "http://schema.org",
          "@type": "WebSite",
          name: companyName,
          url: siteUrl,
        }
        break

      case "page":
        linkedData.page = {
          "@context": "http://schema.org",
          "@type": "WebPage",
          name: props.pageName,
          description: props.metaDescription || siteDescription,
        }
        break

      case "breadcrumb":
        if (Array.isArray(props.crumbs)) {
          linkedData.breadcrumb = {
            "@content": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: props.crumbs.map((crumb, i) => {
              if (i < (props.crumbs?.length || 0) - 1) {
                return {
                  "@type": "ListItem",
                  position: i + 1,
                  name: crumb.name,
                  item: `${siteUrl}${crumb.path}`,
                }
              } else {
                return {
                  "@type": "ListItem",
                  position: i + 1,
                  name: crumb.name,
                }
              }
            }),
          }
        }
        break

      default:
        break
    }
  })

  return linkedData
}

export default useLinkedData
