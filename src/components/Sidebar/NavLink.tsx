import { Icon, Link as ChakraLink, LinkProps, Text } from "@chakra-ui/react"
import { ElementType, ReactNode } from "react"
import Link from 'next/link'
import { ActiveLink } from "../ActiveLink"

interface NavLinkProps extends LinkProps {
  icon: ElementType
  children: ReactNode
  href: string
}

export function NavLink({ children, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref shouldMatchExactHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}