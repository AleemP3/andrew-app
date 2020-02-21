require 'test_helper'

class Api::JournalsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_journals_index_url
    assert_response :success
  end

  test "should get show" do
    get api_journals_show_url
    assert_response :success
  end

end
