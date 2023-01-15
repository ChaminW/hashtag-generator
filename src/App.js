import React, { useState } from 'react'
import {Configuration, OpenAIApi} from 'openai'
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    Box,
    Container,
    Typography,
    TextField,
    Stack,
    Snackbar, Alert, FormControlLabel, Checkbox
} from '@mui/material'
import '@fontsource/happy-monkey/400.css'

function App() {
    const [keywords, setKeywords] = useState('')
    const [hashtags, setHashtags] = useState('')
    const [openToast, setOpenToast] = useState(false)
    const [addSpace, setAddSpace] = useState(false)

    const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Generate 30 hashtags for ${keywords} , with space, remove last empty hash`,
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(response);
      const hashtags = response.data.choices[0].text.replace('\n', '')
      setHashtags(hashtags)
        updateOutput(hashtags, addSpace)
    } catch (error) {
      console.log(error)
    }
  }

  const updateOutput = (hashtags, addSpace) => {
      const space = ".\n" +
          ".\n" +
          ".\n" +
          ".\n" +
          ".\n" +
          "."
      document.getElementById('outlined-multiline-static').value = addSpace ? space + hashtags : hashtags

  }

    const handleCopyClick = () => {
        setOpenToast(true);
    };

    const handleToastClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenToast(false);
    };

  return (
      <Container maxWidth="md">
        <Box sx={{ my: 8 }}
             display="flex"
             justifyContent="center"
             alignItems="center"
        >
          <Typography variant="h2" component="h1">
            Hashtag Generator
          </Typography>
        </Box>
        <Box sx={{ my: 8 }}
             display="flex"
             justifyContent="center"
             alignItems="center"
        >
            <Stack spacing={2} direction="row">
                <FormControl fullWidth>
                    <InputLabel htmlFor="keywords-input">Input Keywords or Caption</InputLabel>
                    <Input
                        id="keywords-input"
                        type="text"
                        placeholder="eg: beach, sunset"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                    />
                </FormControl>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={addSpace}
                            onChange={() => {
                                setAddSpace(!addSpace)
                                updateOutput(hashtags, !addSpace)
                            }}
                            inputProps={{ 'aria-label': 'Add Space' }}
                        />
                    }
                    label="Add dots"
                />
                <Button
                    onClick={handleSubmit}
                    variant="contained" color="primary">Generate #Hashtags</Button>
            </Stack>
        </Box>
        <Box
            justifyContent="center"
            alignItems="center"
        >
            <Stack spacing={2} direction="column">
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    fullWidth
                    rows={10}
                />
                <Button variant="contained" color="secondary" onClick={() => {
                    navigator.clipboard.writeText(hashtags);
                    handleCopyClick()
                }
                }>
                    Copy
                </Button>
                <Snackbar
                    open={openToast}
                    autoHideDuration={6000}
                    onClose={handleToastClose}
                >
                    <Alert onClose={handleToastClose} severity="success" sx={{ width: '100%' }}>
                        Hashtags were copied to clipboard!
                    </Alert>
                </Snackbar>
            </Stack>
        </Box>
      </Container>
  )
}

export default App
