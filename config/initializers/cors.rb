Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'https://portfolio-maker-frontend-sycw.vercel.app'
      resource '*', 
      headers: :any,
        methods: [:get, :post,:delete ,:patch]
    end

  end