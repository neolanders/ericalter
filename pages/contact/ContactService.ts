export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('https://formspree.io/f/mnndgevo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return {
        success: true,
        message: 'Message sent successfully!'
      };
    } else {
      return {
        success: false,
        message: 'Failed to send message. Please try again.'
      };
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again.'
    };
  }
} 