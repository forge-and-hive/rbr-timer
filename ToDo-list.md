ToDo list
Pre add packages, docs and .env
Setup Claude code on the repo

Events
- Create event model(with slug and uuid)
- Create form on /dashboard to create Events
- Create Events page

Timer componet
- Create a timer componet with start/stop

Record audio from microfone
- On start timer, start recording
- On stop display the record

Pitch model and audio upload
- Create pitch model
- Send audio from frontend to back using actions and formData
- Upload to S3(use aws sdk 3)
- Create pitch list client component

Forge simple task
- Create display pitch by uuid and explain claude how to do it

Transcript task
- Using deepgram, create a task to transcribe the audio
https://developers.deepgram.com/reference/speech-to-text-api/listen

Extract data and summary
- Using openAi create a task to generate the summary of the transcript, extract RbRer and technologies
https://platform.openai.com/docs/api-reference/completions

Public page for event
- Create public page to list all the pitches

