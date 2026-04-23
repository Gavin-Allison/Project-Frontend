// messaging.ts

export const send_to_queue = async (queue_name: string, message_type: string, payload: object): Promise<void> => {
  /**
   * Sends a message to a specified RabbitMQ queue.
   * 
   * Parameters:
   * queue_name: The name of the RabbitMQ queue to send the message to.
   * message_type: A string indicating the type of message being sent (e.g., "user_action", "system_event").
   * payload: An object containing the actual data to be sent to the queue.
   * 
   * Returns: A Promise that resolves when the message has been successfully sent to the queue, or rejects if there was an error.
   */
  try {
    const response = await fetch('http://localhost:8000/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        queue: queue_name,
        type: message_type,
        data: payload,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) throw new Error('Message failed to send');
  } catch (error) {
    console.error("RabbitMQ Service Error:", error);
  }
};