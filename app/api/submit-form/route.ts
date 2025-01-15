import { NextResponse } from 'next/server'
import { GoogleSpreadsheet } from 'google-spreadsheet'

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const body = await req.json()

      // Initialize the Google Spreadsheet
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)
      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      })
      await doc.loadInfo()

      const sheet = doc.sheetsByIndex[0]
      await sheet.addRow({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        companyName: body.companyName,
        requirements: body.requirements.join(', '),
        submittedAt: new Date().toISOString(),
      })

      return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 })
    } catch (error) {
      console.error('Error submitting form:', error)
      return NextResponse.json({ message: 'Error submitting form' }, { status: 500 })
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 })
  }
}

