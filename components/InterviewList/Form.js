import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Subtitle } from '@components/Title'
import Airtable from 'airtable'
import EmptyState from '@components/EmptyState'
import Alert from '@components/Alert'
import { Star } from 'react-feather'

const Form = ({cancelForm}) => {

  const [error, setError] = useState(false)
  const [sent, setSent] = useState(false)
  const [formItems, setFormItems] = useState({
    name: '',
    email: '',
    portfolio: ''
  })

  const handleClose = () => {
    cancelForm ? cancelForm() : null
    setError(false)
    setSent(false)
    setFormItems({
      name: '',
      email: '',
      portfolio: ''
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormItems({
      ...formItems,
      [name]: value
    });
    if(formItems.name.length > 0 && formItems.email.length > 0 && formItems.portfolio.length > 0) {
      setError(false)
    }
  }

  const sendItem = () => {
    const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE)

    if(formItems.name.length > 0 && formItems.email.length > 0 && formItems.portfolio.length > 0) {
      setError(false)
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      base('interviews').create([
        {
          "fields": {
            "Name": formItems.name,
            "Email": formItems.email,
            "Website": formItems.portfolio
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        setSent(true)
      });
    } else {
      setError(true)
    }
  }

  useEffect(() => {

  }, [formItems || error])

  return(
    <motion.div
      className="opacity-0"
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="block rounded-md mb-8 mt-8 p-4 border border-black border-opacity-10 dark:border-white dark:border-opacity-10">
            <div className="pb-4 flex flex-col items-center text-center border-b border-black border-opacity-10 dark:border-white dark:border-opacity-10 mb-8">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 bg-opacity-20 text-green-500`}>
                <Star size={'24'}/>
              </div>
              <Subtitle>Nominate a designer (or yourself) for an quick interview</Subtitle>
            </div>
            {
              error ? (
                <Alert
                  type='danger'
                  role="alert"
                >
                  🤯 It seems like something is wrong with one or more of the fields below
                </Alert>
              )
              :
              null
            }
            {
              sent ? (
                <>
                <EmptyState type="success">
                  <p className="text-sm mb-4">Thanks! We'll let you know soon</p>
                  <button
                    className="button button--primary"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </EmptyState>
                </>
              )
              :
              (
                <motion.div
                  className="h-0 overflow-hidden opacity-0"
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0 }}
                >
                  <label htmlFor="company" className="text--secondary font-semibold text-sm mb-2 inline-block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="text-field"
                    type="text"
                    placeholder={'Who should we speak with?'}
                    value={formItems.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="role" className="text--secondary font-semibold text-sm mb-2 inline-block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="text-field"
                    type="email"
                    placeholder={'Where can we contact them?'}
                    value={formItems.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="link" className="text--secondary font-semibold text-sm mb-2 inline-block">
                    Portfolio/Personal Site
                  </label>
                  <input
                    id="portfolio"
                    name="portfolio"
                    className="text-field"
                    type="url"
                    placeholder={'Where we can we find their work?'}
                    value={formItems.portfolio}
                    onChange={handleChange}
                  />
                  <div className={`grid ${cancelForm ? 'grid-cols-2' : 'grid-cols-1'} gap-4 mt-8`}>
                    {
                      cancelForm ? (
                        <button
                          className="button button--secondary flex w-full"
                          onClick={handleClose}
                        >
                          Cancel
                        </button>
                      )
                      :
                      null
                    }
                    <button
                      className="button button--primary flex w-full"
                      onClick={sendItem}
                    >
                      Submit Nomination
                    </button>
                  </div>
                </motion.div>
              )
            }
          </div>
    </motion.div>
  )
}

export default Form