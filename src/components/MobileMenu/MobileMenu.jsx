import React from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <VisuallyHidden>
          <Dialog.Title>Mobile navigation menu</Dialog.Title>
          <Dialog.Description>Mobile Navigation</Dialog.Description>
        </VisuallyHidden>
        <Content>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  background: rgba(0 0 0 / 0.5);
  inset: 0;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  min-width: 300px;
  height: 100%;
  background-color: white;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none;
  font-size: ${14 / 16}rem;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

export default MobileMenu;
