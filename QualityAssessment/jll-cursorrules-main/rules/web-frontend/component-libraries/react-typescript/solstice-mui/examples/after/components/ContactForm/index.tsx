// After: Solstice MUI component with styled subcomponents using styled components pattern
// ✅ Uses FormControl + InputLabel + OutlinedInput + FormHelperText (Solstice-compliant)
// ✅ No TextField - aligns with Solstice form field designs
import type { ReactElement } from "react"
import { useState } from "react"
import { styled } from "@mui/material/styles"
import type { Theme } from "@mui/material/styles"
import { Box, Paper, Typography, Button, FormControl, InputLabel, OutlinedInput, FormHelperText } from "@mui/material"

// ✅ Styled components with slots - fully typed with all Solstice tokens!
const ContainerBox = styled(Box, {
  name: "ContactForm",
  slot: "container",
})(({ theme }: { theme: Theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  padding: theme.fixedSpacing.micro[4],
  backgroundColor: theme.palette.surface.base.default,
}))

const FormPaper = styled(Paper, {
  name: "ContactForm",
  slot: "paper",
})(({ theme }: { theme: Theme }) => ({
  padding: theme.fixedSpacing.static[8],
  width: "100%",
  maxWidth: "400px",
const FormTitleTypography = (props: TypographyProps) => <Typography variant="title3" marginBottom={8} {...props} />

const StyledForm = styled(Box, {
  name: "ContactForm",
  slot: "form",
})(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: theme.fixedSpacing.static[8],
  gap: theme.fixedSpacing.static[8],
}))

const FormInputControl = styled(FormControl, {
  name: "ContactForm",
  slot: "formControl",
})(({ theme }: { theme: Theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.radii.default,
  },
}))

const SubmitButton = styled(Button, {
  name: "ContactForm",
  slot: "submit",
})(({ theme }: { theme: Theme }) => ({
  marginTop: theme.fixedSpacing.static[8],
  // Button already has pre-styled MUI theming
}))

export const ContactForm = (): ReactElement => {
  // ✅ Styled components - all tokens automatically available with full type safety!
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setName(value)
    setNameError(value ? "" : "Name is required")
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setEmail(value)
    setEmailError(value && value.includes("@") ? "" : "Valid email is required")
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (name && email && email.includes("@")) {
      console.log("Form submitted:", { name, email })
    }
  }

  return (
    <ContainerBox>
      <FormPaper>
        <FormTitle>Contact Form</FormTitle>

        <StyledForm component="form" onSubmit={handleSubmit}>
          {/* ✅ Solstice-compliant form field: FormControl + InputLabel + OutlinedInput + FormHelperText */}
          <FormInputControl error={!!nameError}>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <OutlinedInput
              id="name-input"
              type="text"
              value={name}
              onChange={handleNameChange}
              label="Name"
              fullWidth
              required
            />
            {nameError && <FormHelperText>{nameError}</FormHelperText>}
          </FormInputControl>

          {/* ✅ Solstice-compliant form field: FormControl + InputLabel + OutlinedInput + FormHelperText */}
          <FormInputControl error={!!emailError}>
            <InputLabel htmlFor="email-input">Email</InputLabel>
            <OutlinedInput
              id="email-input"
              type="email"
              value={email}
              onChange={handleEmailChange}
              label="Email"
              fullWidth
              required
            />
            {emailError && <FormHelperText>{emailError}</FormHelperText>}
          </FormInputControl>

          <SubmitButton type="submit" fullWidth variant="contained" disabled={!name || !email || !!nameError || !!emailError}>
            Submit
          </SubmitButton>
        </StyledForm>
      </FormPaper>
    </ContainerBox>
  )
}

export default ContactForm
